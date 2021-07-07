import Memo from './Memo'
import { useEffect, useRef, useState } from 'react'
import { media } from 'lib/style-utils'

const { default: styled } = require('styled-components')

const Wrapper = styled.div`
  padding: 0 5rem;
  ${media.tablet`
  padding: 0 0.5rem;
`}
  margin-top: 3rem;
  header {
    font-size: 0.8rem;
    padding: 1rem;
  }
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: 1rem;
`

const Column = styled.div`
  display: grid;
  grid-gap: 0rem;
  grid-auto-rows: max-content;
`

const MemoList = ({ title, memos, onOpen, toolBox, cols }) => {
  const memoList = memos.map((memo) => <Memo key={memo.id} memo={memo} onOpen={onOpen} toolBox={toolBox} />)

  var output = []
  if (cols !== 0) {
    output = memoList.reduce((acc, child, i) => {
      acc[i % cols] = [...acc[i % cols], child]
      return acc
    }, new Array(cols).fill([]))
  }
  console.log(memos)
  if (memos.length === 0) return <Wrapper></Wrapper>
  return (
    <Wrapper>
      <header>{title}</header>
      <List columns={cols}>
        {output.map((column, i) => (
          <Column key={i}>{column}</Column>
        ))}
      </List>
    </Wrapper>
  )
}

export default MemoList
