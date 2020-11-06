// @ts-ignore
import Josa from 'josa-js'

export const randInArray = function randInArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export const convertJuJeobParams = function convertJuJeobParams(name: string) {
  const hasJong = Josa.c(name, '이') === "이"
  
  return {
    name,
    dl: hasJong ? '이' : '',
    dlrk: hasJong ? '이가' : '가',
    dmssms: hasJong ? '은' : '는',
    dkdi: hasJong ? '아' : '야',
  }
}

export const stringReplacer = function stringReplacer(templateString: string, object: Record<string, string>) {
  const replacerRegex = new RegExp(/\{\{(.+?)\}\}/, 'g')

  return templateString.replace(replacerRegex, (_, p1) => {
    const currentReplaceString = object[p1]
    return currentReplaceString === undefined ? p1 : currentReplaceString
  })
}