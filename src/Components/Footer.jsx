import { ArrowUp } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='py-12 px-4 bg-card relative  border-border mt-12 pt-4 pb-4 flex flex-wrap justify-between items-center'>
        <p className='text-sm tesxt-muted-foreground'> &copy; {new Date().getFullYear()} SPcodes.co. All rights reserved.</p>

        <a href="#hero"
        className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
            <ArrowUp size={20} />
        </a>
    </footer>
  )
}
