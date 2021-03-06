import React from 'react'
import styled from 'styled-components'
import Tooltip from './Tooltip'

const Wrapper = styled.div`
  position: relative;
  &:hover {
    & > :first-child {
      visibility: visible;
    }
    & > :last-child {
      background: rgba(0, 0, 0, 0.07);
    }
  }
`

const StyledButton = styled.button`
  border-radius: 50%;

  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: ${({ size }) => size}px;
  font-size: ${({ fontSize }) => fontSize}rem;
  justify-content: center;
  background: transparent;
  color: #5f6368;
`

export default function Button({ size = '10', onClick, tooltip = '', fontSize = '1rem', children }) {
  return (
    <Wrapper>
      {!!tooltip && <Tooltip content={tooltip} />}
      <StyledButton fontSize={fontSize} size={size} onClick={onClick}>
        {children}
      </StyledButton>
    </Wrapper>
  )
}
