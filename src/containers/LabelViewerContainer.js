import Labelviewer from 'components/LabelViewer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as uiActions from 'modules/ui'

export default function LabelViewerContainer() {
  const label = useSelector((state) => state.ui.label)
  const dispatch = useDispatch()
  const { open, info } = label

  return (
    <Labelviewer
      visible={open}
      onClose={() => {
        dispatch(uiActions.closeLabel())
      }}
      // onDelete={handleDelete}
    ></Labelviewer>
  )
}
