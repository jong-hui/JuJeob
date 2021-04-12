import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import CopyToClipboard from 'react-copy-to-clipboard';

const RootWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 7px;
  padding: 20px;
  color: #333;
  font-size: 1rem;
`

export interface IJuJeobResultProps {
  children?: React.ReactNode
}

export const JuJeobResult = observer(function JuJeobResult({
  children
}: IJuJeobResultProps) {
  const { appStore } = useStores()

  return (
    <CopyToClipboard
      text={appStore.resultText}
      onCopy={() => {
        window.alert("복사됐어요!")
      }}
    >
      <RootWrapper>
        {appStore.resultText.split("\n").map((x) => (
          <React.Fragment key={x}>
            {x}
            <br/>
          </React.Fragment>
        ))}
      </RootWrapper>
    </CopyToClipboard>
  )
})