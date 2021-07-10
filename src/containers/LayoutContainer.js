import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import * as uiActions from '../modules/ui'

export default function LayoutContainer({ children }) {
  const dispatch = useDispatch()

  const layout = useSelector((state) => state.ui.layout)

  const handleMenuClick = () => {
    dispatch(uiActions.toggleMenu())
  }
  return (
    <>
      <Layout layout={layout} handleMenuClick={handleMenuClick}>
        {children}
      </Layout>
    </>
  )
}
