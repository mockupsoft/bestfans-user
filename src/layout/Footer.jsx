import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-100 border-t border-gray-100 py-12 bg-gray-200 flex items-center justify-center'>
        <div className='w-7/12 flex gap-1 items-start justify-between'>
            <div className='flex flex-col gap-2 text-xs text-gray-400'>
                <Link className='hover:text-blue-500' to={'/'}>©2023 OnlyFans</Link>
                <Link className='hover:text-blue-500' to={'/'}>Contact</Link>
                <Link className='hover:text-blue-500' to={'/'}></Link>
            </div>
            <div className='flex flex-col gap-2 text-xs text-gray-400'>
            <Link className='hover:text-blue-500' to={'/'}>Help</Link>
            <Link className='hover:text-blue-500' to={'/'}>Store</Link>
            <Link className='hover:text-blue-500' to={'/'}>Cookie Notice</Link>
            <Link className='hover:text-blue-500' to={'/'}>BestFans Safety & Transparency Center</Link>
            </div>
            <div className='flex flex-col gap-2 text-xs text-gray-400'>
            <Link className='hover:text-blue-500' to={'/'}>About</Link>
            <Link className='hover:text-blue-500' to={'/'}>Terms of Service</Link>
            <Link className='hover:text-blue-500' to={'/'}>DMCA</Link>
            <Link className='hover:text-blue-500' to={'/'}>Anti-Slavery and Anti-Trafficking Statement</Link>
            </div>
            <div className='flex flex-col gap-2 text-xs text-gray-400'>
            <Link className='hover:text-blue-500' to={'/'}>Blog</Link>
            <Link className='hover:text-blue-500' to={'/'}>Privacy</Link>
            <Link className='hover:text-blue-500' to={'/'}>USC 2257</Link>
            <Link className='hover:text-blue-500' to={'/'}>Acceptable Use Policy</Link>
            </div>
            <div className='flex flex-col gap-2 text-xs text-gray-400'>
            <Link className='hover:text-blue-500' to={'/'}>Branding</Link>
            <Link className='hover:text-blue-500' to={'/'}>Complaints Policy</Link>
            <Link className='hover:text-blue-500' to={'/'}>Standard Contract Between Fan and Creator</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer