import React from 'react'
import { RiPushpin2Fill, RiPushpin2Line } from 'react-icons/ri'
import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  svg {
    color: ${({ pinned }) => (pinned ? 'black' : '')};
  }
`
export default function Pinned({ onClick, pinned }) {
  return (
    <Wrapper pinned={pinned}>
      <Button onClick={onClick} tooltip="메모 고정">
        {pinned ? <RiPushpin2Fill /> : <RiPushpin2Line />}
      </Button>
    </Wrapper>
  )
}
