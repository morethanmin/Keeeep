import Button from 'components/shared/Button'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { MdLabel } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'
import { BiPencil } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  font-size: 0.9rem;
  outline: none;
  padding: 5px;
  width: 100%;
  &:focus {
    border-bottom: 1px solid #c2c2c2;
  }
  margin: 0px 5px;
`

export default function Label({ value }) {
  const inputRef = useRef()
  const [inputFocus, setInputFocus] = useState(false)

  const handlePlus = () => {
    inputRef.current.focus()
    setInputFocus(true)
  }

  const handleSubmit = () => {
    setInputFocus(false)
    inputRef.current.blur()
  }

  const handleDelete = () => {}
  return (
    <Wrapper>
      {inputFocus ? (
        <Button onClick={handleDelete} tooltip="라벨 삭제" size="3" fontSize="1.2">
          <HiTrash />
        </Button>
      ) : (
        <Button size="3" fontSize="1.2">
          <MdLabel />
        </Button>
      )}
      <Input
        value={value}
        name="input"
        onFocus={() => {
          setInputFocus(true)
        }}
        ref={inputRef}
        placeholder="라벨 이름 입력"
      />
      {inputFocus ? (
        <Button onClick={handleSubmit} tooltip="라벨 이름 바꾸기" size="3" fontSize="1.2">
          <BsCheck />
        </Button>
      ) : (
        <Button onClick={handlePlus} tooltip="라벨 이름 바꾸기" size="3" fontSize="1.2">
          <BiPencil />
        </Button>
      )}
    </Wrapper>
  )
}
