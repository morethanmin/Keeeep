import { getInitialMemo } from 'modules/memo'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as memoActions from 'modules/memo'
import MemoListContainer from 'containers/MemoListContainer'
import MemoViewerContainer from 'containers/MemoViewerContainer'

export default function Archive() {
  const dispatch = useDispatch()
  const { data: memos, loading } = useSelector((state) => state.memo)
  var cursor = 0

  useEffect(() => {
    dispatch(getInitialMemo())
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
      {loading ? null : <MemoListContainer title="" filter={{ archived: true }} />}
      <MemoViewerContainer />
    </>
  )
}
