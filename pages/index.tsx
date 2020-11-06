import { styleMixins } from '@/styles/mixins/styleMixins'
import { mobile } from '@/styles/utils'
import { JujeobForm } from 'components/organisms/forms/JujeobForm/JujeobForm'
import { Introduce } from 'components/organisms/Introduce/Introduce'
import React from 'react'
import styled from 'styled-components'
import { HomeMain } from './Home/HomeMain'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(https://ju-jeob.s3.ap-northeast-2.amazonaws.com/assets/imgs/ju-jeob-background.png);
  background-size: 33.3333vw auto;
  position: relative;

  animation: downdowndown 48s linear infinite;

  @keyframes downdowndown {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 200% -200%;
    }
  }
  
  padding-top: 100px;
  padding-bottom: 100px;

  ${mobile`
    background-size: 100vw auto;
    padding-top: 40px;
    padding-bottom: 40px;
  `}

  &:before {
    content: "";
    background-color: rgba(0,0,0,0.6);
    ${styleMixins(["fulfilledAbsolute", "absolute"])};
    z-index: 1;
  }
`

export default function Home() {
  return (
    <Wrapper>
      <HomeMain />
    </Wrapper>
  )
}
