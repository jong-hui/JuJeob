import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import { Button } from 'components/atoms/buttons/Button';
import { TweetButton } from 'components/atoms/buttons/TweetButton';
import { styleMixins } from '@/styles/mixins/styleMixins';
import { newLineToTwitterNewLine } from '@/helpers/utils';
import { TWITTER_NEWLINE } from '@/consts/consts';

const suffix = `${TWITTER_NEWLINE}${TWITTER_NEWLINE}&hashtags=주접생성기,주접&url=https://ju-jeob.com&related=주접,유튜브,댓글,아이돌`

const RootWrapper = styled.div`
  ${styleMixins(['centering'])};
  padding: 1rem 0;
`



export interface ITweetShereProps {
  children?: React.ReactNode
  text?: string
}

export const TweetShere = observer(function TweetShere({
  children,
  text
}: ITweetShereProps) {
  const {} = useStores()

  console.log(newLineToTwitterNewLine(text ?? ''))

  return (
    <RootWrapper>
      <TweetButton
        href={`https://twitter.com/intent/tweet?text=${newLineToTwitterNewLine(text ?? '')}${suffix}`}
        target="_blank"
      >바로 트윗하기</TweetButton>
    </RootWrapper>
  )
})