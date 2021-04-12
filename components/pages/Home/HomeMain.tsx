import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import { Introduce } from 'components/organisms/Introduce/Introduce';
import { mobile } from '@/styles/utils';
import { JujeobForm } from 'components/organisms/forms/JujeobForm/JujeobForm';
import { JuJeobResult } from 'components/organisms/JuJeobResult/JuJeobResult';
import { DeveloperInfo } from 'components/molecules/DeveloperInfo/DeveloperInfo';
import { TweetShere } from 'components/molecules/TweetShere/TweetShere';
import { FIRST_RESULT } from '@/consts/consts';

const HomeJuJeobForm = styled(JujeobForm)`
  margin: 0 auto;
  width: 50%;
  padding-top: 40px;

  ${mobile`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  `}
`

const HomeJuJeobResultWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  padding-top: 40px;

  ${mobile`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  `}
`

const RootWrapper = styled.div`
  position: relative;
  z-index: 2;
`

export interface IHomeProps {
  children?: React.ReactNode
}

export const HomeMain = observer(function HomeMain({
  children
}: IHomeProps) {
  const { appStore } = useStores()
  const handleSubmit = (data: {
    name: string
    callName: string
  }) => {
    appStore.setName(data.name)
    appStore.setResultText(data.name)
  }

  return (
    <RootWrapper>
      <Introduce
        title="주접 생성기"
        subTitle={appStore.mainText}
      >
      </Introduce>
      <HomeJuJeobForm
        onSubmit={handleSubmit}
      />
      <HomeJuJeobResultWrapper>
        <JuJeobResult />
      </HomeJuJeobResultWrapper>
      {
        (appStore.resultText !== FIRST_RESULT) ? (
          <TweetShere text={appStore.resultText}></TweetShere>
        ) : null
      }
      <DeveloperInfo />
    </RootWrapper>
  )
})

