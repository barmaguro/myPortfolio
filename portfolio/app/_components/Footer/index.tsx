import React from 'react'
import LogoHasText from '../LogoHasText'

export default function index() {
  return (
    <div className='flex justify-between items-baseline py-5 px-4 mt-10 mx-auto'>
      <LogoHasText />
      <small className='text-secondary'>&copy;2024 motodesign</small>
    </div>
  )
}
