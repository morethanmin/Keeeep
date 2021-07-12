import * as memoActions from 'modules/memo'
import * as labelActions from 'modules/label'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WriteMemo from 'containers/WriteMemoContainer'
import MemoListContainer from 'containers/MemoListContainer'
import MemoViewerContainer from 'containers/MemoViewerContainer'

export default function Index() {
  const dispatch = useDispatch()
  const { data: memos, loading } = useSelector((state) => state.memo)
  var cursor = 0

  useEffect(() => {
    dispatch(memoActions.getInitialMemo())
    dispatch(labelActions.getInitialLabel())
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [memos])

  const handleScroll = () => {
    const { clientHeight } = document.body
    const { innerHeight } = window

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    if (clientHeight - innerHeight - scrollTop < 100) {
      var curCursor
      if (memos.length === 0) return
      curCursor = memos[memos.length - 1].id
      if (cursor === curCursor) return
      cursor = curCursor
      if (cursor === 1) return
      dispatch(memoActions.getPreviousMemo(cursor))
    }
  }
  return (
    <>
      <WriteMemo />
      {loading ? null : <MemoListContainer title="고정됨" filter={{ pinned: true, archived: false }} />}
      {loading ? null : <MemoListContainer title="일반" filter={{ pinned: false, archived: false }} />}
      <MemoViewerContainer />
    </>
  )
}
