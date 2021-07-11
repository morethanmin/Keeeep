import MemoViewer from 'components/MemoViewer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as uiActions from 'modules/ui'
import * as memoActions from 'modules/memo'
import ToolBoxContainer from './ToolBoxContainer'

export default function MemoViewerContainer() {
  const memo = useSelector((state) => state.ui.memo)
  const dispatch = useDispatch()
  const { open, info } = memo

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(uiActions.changeMemoInput({ name, value }))
  }

  const handleUpdate = () => {
    dispatch(memoActions.updateMemo(memo.info))
    dispatch(uiActions.closeMemo())
  }

  return (
    <MemoViewer
      visible={open}
      memo={memo.info}
      toolBox={ToolBoxContainer}
      onChange={handleChange}
      onClose={() => {
        dispatch(uiActions.closeMemo())
      }}
      onUpdate={handleUpdate}
      // onDelete={handleDelete}
    ></MemoViewer>
  )
}
