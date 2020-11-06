import { makeAutoObservable } from "mobx";

export class AppStore {
  themeVariant: 'dark' | 'light' = 'dark'
  isLoading: boolean = true
  // 0 - 100
  loadingProgress: number = 0

  constructor() {

    makeAutoObservable(this)
  }
}