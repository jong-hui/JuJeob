import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import { mobile } from '@/styles/utils';

const RootWrapper = styled.div`
  margin: 0 auto;
  width: 50%;

  ${mobile`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  `}
`

const Title = styled.h2`
  font-size: 4em;
  color: #fff;
  text-align: center;
`
const SubTitle = styled.h4`
  font-size: 2em;
  font-weight: 400;
  color: #fff;
  text-align: center;
  margin-top: 12px;
`

export interface IIntroduceProps {
  children?: React.ReactNode
  title: string
  subTitle: string
}

export const Introduce = observer(function Introduce({
  children,
  title,
  subTitle
}: IIntroduceProps) {
  const {} = useStores()

  return (
    <RootWrapper>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subTitle}
      </SubTitle>
      {children}
    </RootWrapper>
  )
})