import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import { LabelValue } from '@/models/_base/LabelValue';
import { FormControl } from './FormControl';

const Select = styled.select`
  border: 1px solid #fff;
  border-radius: 7px;
  height: 42px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  background-color: transparent;

  &::placeholder {
    color: #ccc;
  }
`

export interface ISelectInputProps {
  label?: string;
  list: LabelValue[]
  children?: React.ReactNode
}

export const SelectInput = observer(function SelectInput({
  label,
  children,
  list,
  ...rest
}: ISelectInputProps & React.HTMLAttributes<HTMLSelectElement>) {
  const { } = useStores()

  return (
    <FormControl
      label={label}
      id={rest.id}
    >
      <Select
        {...rest}
      >
        {list.map((x) => (
          <option key={`select-input-${x.value}`} value={x.value}>{x.label}</option>
        ))}
      </Select>
    </FormControl>
  )
})