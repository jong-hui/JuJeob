import { jujeobService } from "@/apis/Jujeobs/JujeobService";
import { FIRST_RESULT } from "@/consts/consts";
import nameDatabase from "@/consts/nameDatabase";
import { randInArray } from "@/helpers/utils";
import { makeAutoObservable } from "mobx";

export class AppStore {
  themeVariant: 'dark' | 'light' = 'dark'
  isLoading: boolean = true
  mainText: string = ''
  resultText: string = FIRST_RESULT
  name: string = ''
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

  setName(name: string) {
    this.name = name
  }

  setResultText(name: string) {
    this.resultText = jujeobService.getJujeobText(name)
  }
}