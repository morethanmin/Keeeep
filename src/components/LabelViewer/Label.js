import Button from 'components/shared/Button'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { MdLabel } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'
import { BiPencil } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { useEffect } from 'react'

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
  const wrapperRef = useRef()
  const [inputFocus, setInputFocus] = useState(false)
  const [labelHover, setLabelHover] = useState(false)

  useEffect(() => {
    window.addEventListener('mousedown', handleClick)
    return () => {
      window.removeEventListener('mousedown', handleClick)
    }
  }, [value])

  const handleClick = (e) => {
    if (wrapperRef.current.contains(e.target)) return
    setInputFocus(false)
  }
  const handleSubmit = () => {
    console.log('updateEvent')
    setInputFocus(false)
  }
  const handleDelete = () => {
    console.log('deleteEvent')
    setInputFocus(false)
  }
  return (
    <Wrapper
      ref={wrapperRef}
      onMouseOver={() => {
        setLabelHover(true)
      }}
      onMouseLeave={() => {
        setLabelHover(false)
      }}
    >
      <Button onClick={handleDelete} tooltip="라벨 삭제" size="3" fontSize="1.2">
        {inputFocus || labelHover ? <HiTrash /> : <MdLabel />}
      </Button>

      <Input
        onFocus={() => {
          setInputFocus(true)
        }}
        onBlur={() => {}}
        value={value}
        name="input"
        ref={inputRef}
        placeholder="라벨 이름 입력"
      />

      <Button onClick={handleSubmit} tooltip="라벨 이름 바꾸기" size="3" fontSize="1.2">
        {inputFocus ? <BsCheck /> : <BiPencil />}
      </Button>
    </Wrapper>
  )
}
