import React from 'react'
import Link from 'next/link'
import { PAGES } from '@/constants/index'


const Nav = () => {
    
  return (
    <nav className='border border-solid'>
        <ul className='flex flex-wrap items-center gap-4 p-4'>
            {PAGES.map((page)=>{
                return (
                    <li key={page.title}>
                        <Link href={page.href} >{page.title}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Nav