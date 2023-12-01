import { useToastStore } from '@/store/toast'
import { createPinia, setActivePinia } from 'pinia'

const toastText = 'トーストのテキスト'

describe('Toast Store', () => {
  beforeEach(() => {
    // 毎テストごとにStore初期化
    setActivePinia(createPinia())
  })

  it('初期値', () => {
    const toastStore = useToastStore()
    expect(toastStore.$state).toEqual({
      isActive: false,
      text: null,
      color: 'success',
    })
  })

  it('SuccessToastの表示', () => {
    const toastStore = useToastStore()
    toastStore.setSuccessToast(toastText)
    expect(toastStore.$state).toEqual({
      isActive: true,
      text: toastText,
      color: 'success',
    })
  })

  it('ErrorToastの表示', () => {
    const toastStore = useToastStore()
    toastStore.setErrorToast(toastText)
    expect(toastStore.$state).toEqual({
      isActive: true,
      text: toastText,
      color: 'error',
    })
  })
})
