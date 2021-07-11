import MemoList from 'components/MemoLIst'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as uiActions from 'modules/ui'
import ToolBoxContainer from './ToolBoxContainer'

export default function MemoListContainer({ title, filter }) {
  const ref = useRef()
  const [cols, setCols] = useState(0)

  const memos = useSelector((state) => state.memo.data)

  const filterKeyArray = Object.keys(filter)
  const filteredMemos = memos.filter((memo) => {
    const mapResult = filterKeyArray.map((key) => {
      return filter[key] === memo[key]
    })
    const findResult = mapResult.includes(false)
    return !findResult
  })

  const dispatch = useDispatch()

  useEffect(() => {
    handleResize()
  }, [ref])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = (e) => {
    const colsNum = parseInt(ref.current.scrollWidth / 240)
    if (colsNum === 0) setCols(1)
    else setCols(colsNum)
  }

  return (
    <div ref={ref}>
      <MemoList
        title={title}
        filter={filter}
        memos={filteredMemos}
        cols={cols}
        toolBox={ToolBoxContainer}
        onOpen={(payload) => {
          dispatch(uiActions.openMemo(payload))
        }}
      />
    </div>
  )
}
