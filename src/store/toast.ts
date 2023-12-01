import { defineStore } from 'pinia'

interface State {
  isActive: boolean
  text: string | null
  color: 'success' | 'error'
}

export const useToastStore = defineStore('toast', {
  state: (): State => ({
    isActive: false,
    text: null,
    color: 'success',
  }),
  actions: {
    /**
     * Stateの初期化
     */
    unsetSnackbar() {
      this.$reset()
    },
    /**
     * トーストの表示
     */
    setToast(text: State['text']) {
      this.isActive = true
      this.text = text
    },
    setSuccessToast(text: State['text']) {
      this.setToast(text)
      this.color = 'success'
    },
    setErrorToast(text: State['text']) {
      this.setToast(text)
      this.color = 'error'
    },
  },
})
