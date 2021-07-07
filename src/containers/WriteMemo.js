import React, { useEffect, useRef } from 'react'
import { InputPlaceholder, WhiteBox } from 'components/WriteMemo'
import { InputSet, SaveButton } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import * as uiActions from 'modules/ui'
import * as memoActions from 'modules/memo'
import ToolBoxContainer from './ToolBoxContainer'

const WriteMemo = () => {
  const WhiteBoxRef = useRef()
  const write = useSelector((state) => state.ui.write)
  const memos = useSelector((state) => state.memo.data)
  const { focused, info } = write
  const { title, body, color, pinned } = info
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('mousedown', handleClick)
    return () => {
      window.removeEventListener('mousedown', handleClick)
    }
  }, [info, focused])

  const handleFocus = () => {
    if (!focused) {
      dispatch(uiActions.focusInput())
    }
  }

  //title, body가 갱신이 안되서 내용이 있을 땐 blur액션이 일어나지 않게\
  const handleClick = (e) => {
    if (!focused) return
    if (title !== '' || body !== '') return
    if (WhiteBoxRef.current.contains(e.target)) return
    dispatch(uiActions.resetInput())
    dispatch(uiActions.blurInput())
    document.removeEventListener('mousedown', handleClick)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(uiActions.changeInput({ name, value }))
  }

  const handleCreate = () => {
    const cursor = memos[0] ? memos[0].id : 0
    dispatch(memoActions.createMemo({ info, cursor }))
    dispatch(uiActions.resetInput())
    // dispatch(memoActions.getRecentMemo(cursor));
  }

  return focused ? (
    <WhiteBox color={color} ref={WhiteBoxRef}>
      <InputSet onChange={handleChange} title={title} body={body} />
      <ToolBoxContainer type="ui/write" memo={info}>
        <SaveButton onClick={handleCreate} />
      </ToolBoxContainer>
    </WhiteBox>
  ) : (
    <WhiteBox ref={WhiteBoxRef} onClick={handleFocus}>
      <InputPlaceholder />
    </WhiteBox>
  )
}

export default WriteMemo
