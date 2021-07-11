import Labelviewer from 'components/LabelViewer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as uiActions from 'modules/ui'

export default function LabelViewerContainer() {
  const label = useSelector((state) => state.ui.label)
  const dispatch = useDispatch()
  const { open, input } = label

  const handleClose = (e) => {
    dispatch(uiActions.resetLabelInput())
    dispatch(uiActions.closeLabel())
  }
  const handleChange = (e) => {
    const { value, name } = e.target
    dispatch(uiActions.changeLabelInput({ name, value }))
  }
  return (
    <Labelviewer
      input={input}
      onChange={handleChange}
      visible={open}
      onClose={handleClose}
      // onDelete={handleDelete}
    ></Labelviewer>
  )
}
