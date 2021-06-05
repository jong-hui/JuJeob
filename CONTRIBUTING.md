# CONTRIBUTING

주접에 대한 데이터베이스가 많지 않기 때문에 많은 분들의 기여를 기다리고 있습니다.

## how to

`/src/consts/jujeobDatabase.ts`에 본인의 주접을 적어주세요.

```typescript
{
  body: `{{name}}{{dl}}한테는 벽이 느껴져, 완벽`,
  writer: `https://github.com/jong-hui`,
},
```

해당 오브젝트를 배열 가장 끝에 추가해주세요.

writer는 써주지 않으셔도 됩니다.

body에 대한 포맷은 다음과 같습니다.

| 포맷   | 종성 有        | 종성 無        |
| ------ | -------------- | -------------- |
| name   | 사용자 입력 값 | 사용자 입력 값 |
| dl     | 이             | 빈값           |
| dlrk   | 이가           | 가             |
| dmssms | 은             | 는             |
| dmffmf | 을             | 를             |
| dkdi   | 아             | 이             |

포맷이 완벽하지 않기 때문에 포맷에 대한 추가 PR도 받고있습니다!  
포맷에 대한 convert는 `/src/helpers/utils.ts`에 `convertJuJeobParams`함수가 하고있습니다.

데이터베이스 추가에 대한 커밋 메시지는 알아서 작성해주셔도 괜찮습니다.
커밋 후 편하게 PR 올려주시면 좋을 것 같습니다!

감사합니다.
