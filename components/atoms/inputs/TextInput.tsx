import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import { FormControl } from './FormControl';

const Input = styled.input`
  border: 1px solid #fff;
  border-radius: 7px;
  height: 42px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;

  &::placeholder {
    color: #ccc;
  }
`

export interface ITextInputProps {
  label?: string;
  children?: React.ReactNode
}

export const TextInput = observer(function TextInput({
  label,
  children,
  ...rest
}: ITextInputProps & React.HTMLAttributes<HTMLInputElement>) {
  const {} = useStores()

  return (
    <FormControl
      label={label}
      id={rest.id}
    >
      <Input
        {...rest}
      >
      </Input>
    </FormControl>
  )
})