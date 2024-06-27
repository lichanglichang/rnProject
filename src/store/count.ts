import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist<{ count: number; increment: () => void; decrement: () => void }>(
    set => ({
      count: 0,
      increment: () => {
        set(store => ({ ...store, count: store.count + 1 }))
      },
      decrement: () => set(state => ({ ...state, count: state.count - 1 })),
    }),
    {
      name: 'counter-storage', // 存储名称
      getStorage: () => AsyncStorage,
    },
  ),
)

export default useStore
