import React, { AnchorHTMLAttributes } from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';

const RootWrapper = styled.a`

`

export interface IALinkProps extends AnchorHTMLAttributes<{}> {
  children?: React.ReactNode
}

export const ALink = observer(function ALink({
  children,
  ...rest
}: IALinkProps) {
  const {} = useStores()

  return (
    <RootWrapper
      {...rest}
    >
      {children}
    </RootWrapper>
  )
})