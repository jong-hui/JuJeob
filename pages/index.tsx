import { styleMixins } from '@/styles/mixins/styleMixins'
import { mobile } from '@/styles/utils'
import styled from 'styled-components'

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

  ${mobile`
    background-size: 100vw auto;
  `}

  &:after {
    content: "";
    background-color: rgba(0,0,0,0.6);
    ${styleMixins(["fulfilledAbsolute", "absolute"])}
  }
`

export default function Home() {
  return (
    <Wrapper>

    </Wrapper>
  )
}
