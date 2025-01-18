'use client'

import { Provider } from 'react-redux'
import { mainStore } from '@/app/stores'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const MainProviders: FC<Props> = ({ children }) => {
  return <Provider store={mainStore}>{children}</Provider>
}
