import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import * as uiActions from '../modules/ui'
import * as memoActions from '../modules/memo'

export default function LayoutContainer({ children }) {
  const dispatch = useDispatch()

  const layout = useSelector((state) => state.ui.layout)

  const handleMenuClick = () => {
    dispatch(uiActions.toggleMenu())
  }
  const handleRefresh = () => {
    dispatch(memoActions.getInitialMemo())
  }
  return (
    <>
      <Layout layout={layout} handleRefresh={handleRefresh} handleMenuClick={handleMenuClick}>
        {children}
      </Layout>
    </>
  )
}
