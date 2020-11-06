import { jujeobService } from "@/apis/Jujeobs/JujeobService";
import nameDatabase from "@/consts/nameDatabase";
import { randInArray } from "@/helpers/utils";
import { makeAutoObservable } from "mobx";

export class AppStore {
  themeVariant: 'dark' | 'light' = 'dark'
  isLoading: boolean = true
  mainText: string = ''
  resultText: string = '주접을 떨어주세요! 클릭 시 복사돼요.'
  mainTextTimouetScheduler: number = -1

  constructor() {
    this.setNewMainText()
    this.mainTextSchedulerRegister()

    makeAutoObservable(this)
  }

  mainTextSchedulerRegister() {
    this.mainTextTimouetScheduler = setTimeout(() => {
      this.setNewMainText()
    }, 15000);
  }

  setNewMainText() {
    clearTimeout(this.mainTextTimouetScheduler)

    this.mainText = jujeobService.getJujeobText(randInArray(nameDatabase))
    this.mainTextSchedulerRegister()
  }

  setResultText(name: string) {
    this.resultText = jujeobService.getJujeobText(name)
  }
}