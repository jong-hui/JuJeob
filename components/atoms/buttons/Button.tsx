import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';

const RootWrapper = styled.button`
  height: 42px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 7px;
  background-color: white;
  cursor: pointer;
`

export interface IButtonProps {
  children?: React.ReactNode
}

export const Button = observer(function Button({
  children
}: IButtonProps) {
  const {} = useStores()

  return (
    <RootWrapper>
      {children}
    </RootWrapper>
  )
})