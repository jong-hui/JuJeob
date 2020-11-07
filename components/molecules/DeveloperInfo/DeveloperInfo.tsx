import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import { ALink } from 'components/atoms/Links/ALink';
import { styleMixins } from '@/styles/mixins/styleMixins';

const RootWrapper = styled.div`
  ${styleMixins(["flexRow"])};
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  color: #ccc;
`

const PrefixText = styled.span`
  display: inline-block;
  margin-right: 14px;
`

const Divider = styled.span`
  display: inline-block;
  width: 1px;
  height: 12px;
  background-color: #ccc;
  margin-left: 12px;
  margin-right: 12px;
`

export interface IDeveloperInfoProps {
  children?: React.ReactNode
}

export const DeveloperInfo = observer(function DeveloperInfo({
  children
}: IDeveloperInfoProps) {
  const {} = useStores()

  return (
    <RootWrapper>
      <PrefixText>
        Developer's 
      </PrefixText>
      <ALink href="https://github.com/jong-hui" target="_blank">
        Github
      </ALink>
      <Divider />
      <ALink href="https://jong-hui.github.io" target="_blank">
        Blog
      </ALink>
      <Divider />
      <ALink href="mailto:webd200@gmail.com" target="_blank">
        Mail
      </ALink>
    </RootWrapper>
  )
})