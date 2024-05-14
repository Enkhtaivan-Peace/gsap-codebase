import React from 'react'
import Header from './Header'
import TransitionComponent from '../ui/container/transition/Transition'
import { TransitionProvider } from '../ui/container/transition/useTransitionCtx'

function Layout({children}) {
  return (
    <div>
        <Header />
        <TransitionProvider>
            <div className='content-container'>
                <TransitionComponent>
                    {children}
                </TransitionComponent>
            </div>
        </TransitionProvider>
    </div>
  )
}

export default Layout