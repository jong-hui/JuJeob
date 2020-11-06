import React from 'react'
import { observer } from "mobx-react";
import styled from 'styled-components';
import { useStores } from '@/stores';
import { TextInput } from 'components/atoms/inputs/TextInput';
import { SelectInput } from 'components/atoms/inputs/SelectInput';
import { styleMixins } from '@/styles/mixins/styleMixins';
import { Button } from 'components/atoms/buttons/Button';
import { mobile } from '@/styles/utils';

const RootWrapper = styled.form`

`
const FormBox = styled.div`
  ${styleMixins(["flexRow"])};
  align-items: flex-end;

  ${mobile`
    flex-direction: column;
    align-items: flex-start;
  `}
`

const Divider = styled.div`
  width: 12px;
  height: 1px;

  ${mobile`
    width: 1px;
    height: 12px;
  `}
`

export interface IJujeobFormProps {
  children?: React.ReactNode
}

export const JujeobForm = observer(function JujeobForm({
  children,
  ...rest
}: IJujeobFormProps & React.HTMLAttributes<HTMLFormElement>) {
  const {} = useStores()

  return (
    <RootWrapper {...rest}>
      <FormBox>
        <TextInput 
          id="jujeob-name"
          label="이름이애오"
          placeholder="이름 입력해 진짜 어떡해"
        >
        </TextInput>
        <Divider/>
        <SelectInput
          id="jujeob-callName"
          label="호칭이애오"
          list={[
            { value: '', label: 'X' },
            { value: '언니', label: '언니' },
            { value: '누나', label: '누나' },
            { value: '형', label: '형' },
            { value: '오빠', label: '오빠' },
          ]}
          placeholder="오빠라고 불러"
        ></SelectInput>
        <Divider />
        <Button>
          주접 떨기
        </Button>
      </FormBox>
    </RootWrapper>
  )
})