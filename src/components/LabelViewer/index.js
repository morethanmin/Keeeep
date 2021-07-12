import React from 'react'
import Button from 'components/shared/Button'
import SaveButton from 'components/shared/SaveButton'
import styled from 'styled-components'
import oc from 'open-color'
import { BsPlus, BsCheck, BsX } from 'react-icons/bs'
import { useState } from 'react'
import { useRef } from 'react'
import Label from './Label'

// 화면을 불투명하게 해줍니다.
const Dimmed = styled.div`
  background: ${oc.gray[3]};
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  position: fixed;
  z-index: 10;
  opacity: 0.5;
`

const Viewer = styled.div`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: white;
  position: fixed;
  height: auto;
  z-index: 15;
  width: 100%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`
const InputWrapper = styled.div`
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

const LabelListWrapper = styled.div`
  > * {
    margin-bottom: 15px;
  }
`

const ViewerTop = styled.div`
  padding: 1rem;
  > * {
    margin-bottom: 15px;
  }
  border-top: 1px solid #dadce0;
`

const ViewerBottom = styled.div`
  padding: 1rem;

  border-top: 1px solid #dadce0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`

const LabelViewer = ({ visible, labels, onSubmit, onChange, onClose, input }) => {
  const inputRef = useRef()
  const [inputFocus, setInputFocus] = useState(false)
  const handlePlus = () => {
    inputRef.current.focus()
  }
  const handleX = () => {
    inputRef.current.blur()
    setInputFocus(false)
  }
  const handleLabelSubmit = () => {
    setInputFocus(false)
    inputRef.current.blur()
    onSubmit()
  }

  const handleClose = () => {
    setInputFocus(false)
    onClose()
  }
  console.log(labels)
  if (!visible) return null
  return (
    <div>
      <Dimmed onClick={handleClose} />
      <Viewer>
        <ViewerTop>
          <div>라벨 수정</div>
          <InputWrapper>
            {inputFocus ? (
              <Button onClick={handleX} tooltip="취소" size="3" fontSize="1.2">
                <BsX />
              </Button>
            ) : (
              <Button onClick={handlePlus} tooltip="라벨 만들기" size="3" fontSize="1.2">
                <BsPlus />
              </Button>
            )}

            <Input
              value={input}
              onChange={onChange}
              name="input"
              onFocus={() => {
                setInputFocus(true)
              }}
              ref={inputRef}
              placeholder="새 라벨 만들기"
            />
            {inputFocus ? (
              <Button onClick={handleLabelSubmit} tooltip="라벨 만들기" size="3" fontSize="1.2">
                <BsCheck />
              </Button>
            ) : null}
          </InputWrapper>
          <LabelListWrapper>
            {labels.map((label) => (
              <Label value={label.text} key={label.id} />
            ))}
          </LabelListWrapper>
        </ViewerTop>

        <ViewerBottom>
          <SaveButton onClick={handleClose} />
        </ViewerBottom>
      </Viewer>
    </div>
  )
}

export default LabelViewer
