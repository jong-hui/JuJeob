import { styleMixins } from '@/styles/mixins/styleMixins'
import { mobile } from '@/styles/utils'
import { JujeobForm } from 'components/organisms/forms/JujeobForm/JujeobForm'
import { Introduce } from 'components/organisms/Introduce/Introduce'
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
  
  padding-top: 100px;

  ${mobile`
    background-size: 100vw auto;
    padding-top: 40px;
  `}

  &:before {
    content: "";
    background-color: rgba(0,0,0,0.6);
    ${styleMixins(["fulfilledAbsolute", "absolute"])};
    z-index: 1;
  }
`

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

export default function Home() {
  return (
    <Wrapper>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Introduce
          title="주접 생성기"
          subTitle={
            `예지 그거 기억나요? 사람들 한테 예지 좋아하는 사람 손 접어 했더니 지구가 반으로 접힌거\n그거 겨우겨우 되돌렸잖아요 나 그 때 내 눈 앞에 브라질 있어서 깜짝 놀랐잖아`
          }
        >
        </Introduce>
        <HomeJuJeobForm
          onSubmit={(data) => {
            console.log(data)
          }}
        />
      </div>
    </Wrapper>
  )
}
