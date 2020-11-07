import React from 'react'
import { observer, useLocalObservable } from "mobx-react";
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
  justify-content: center;
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
  onSubmit: (data: { name: string; callName: string }) => void
  children?: React.ReactNode;
}

export const JujeobForm = observer(function JujeobForm({
  children,
  onSubmit,
  ...rest
}: IJujeobFormProps & Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit">) {
  const localStore = useLocalObservable(() => ({
    name: '',
    callName: ''
  }))
  const {} = useStores()

  return (
    <RootWrapper
      onSubmit={(e) => {
        e.preventDefault()

        onSubmit({
          name: localStore.name,
          callName: localStore.callName
        })
      }}
      {...rest}
    >
      <FormBox>
        <TextInput 
          id="jujeob-name"
          label="이름이애오"
          placeholder="이름 입력해 진짜 어떡해 내가 미쳐"
          value={localStore.name}
          onChange={(e) => {
            localStore.name = e.currentTarget.value
          }}
        >
        </TextInput>
        {/* <Divider/>
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
          value={localStore.callName}
          onChange={(e) => {
            localStore.callName = e.currentTarget.value
          }}
        ></SelectInput> */}
        <Divider />
        <Button>
          주접 떨기
        </Button>
      </FormBox>
    </RootWrapper>
  )
})