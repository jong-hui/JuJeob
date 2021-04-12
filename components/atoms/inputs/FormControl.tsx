import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import { styleMixins } from '@/styles/mixins/styleMixins';

const RootWrapper = styled.div`
  ${styleMixins(["flexColumn"])}
`

const FormLabel = styled.label`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 8px;
`

export interface IFormControlProps {
  id?: string
  label?: string
  children?: React.ReactNode
}

export const FormControl = observer(function FormControl({
  id,
  label,
  children
}: IFormControlProps) {
  const {} = useStores()

  return (
    <RootWrapper>
      {
        (label !== undefined && label !== "") ? (
          <FormLabel htmlFor={id}>
            {label}
          </FormLabel>
        ) : (
          null
        )
      }
      {children}
    </RootWrapper>
  )
})