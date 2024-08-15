import MenuOptions from '@/components/global/sidebar/menu-options'
import InfoBar from '@/components/infobar'
import React from 'react'

type Props = {children: React.ReactNode}

const Layout = ({children}:Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <MenuOptions />
        <div className='w-full'>
        <InfoBar />
        {
        children
      }
        </div>
     
    </div>
  )
}

export default Layout
