import Labelviewer from 'components/LabelViewer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as uiActions from 'modules/ui'
import * as labelActions from 'modules/label'

export default function LabelViewerContainer() {
  const labelUi = useSelector((state) => state.ui.label)
  const labelData = useSelector((state) => state.label.data)
  const dispatch = useDispatch()
  const { open, input } = labelUi
  const handleSubmit = () => {
    dispatch(uiActions.resetLabelInput())
    if (input === '') return

    dispatch(labelActions.createLabel({ text: input }))
  }

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
      labels={labelData}
      onSubmit={handleSubmit}
      onChange={handleChange}
      visible={open}
      onClose={handleClose}
      // onDelete={handleDelete}
    ></Labelviewer>
  )
}
