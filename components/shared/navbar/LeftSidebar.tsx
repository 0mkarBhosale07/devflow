'use client'
import { sidebarLinks } from '@/constants';
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const LeftSidebar = () => {
    const pathname = usePathname();
  return (
    <section className='background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar'>
        <div className='flex flex-1 flex-col gap-6'>
            {sidebarLinks.map((item)=>{ 
                const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
                return(
                
                    <Link key={item.route} href={item.route} className={`${isActive? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900'} flex items-center justify-start gap-4 bg-transparent p-4`}>
                        <Image src={item.imgURL} width={20} height={20} alt={item.label} className={`${isActive ? "" : "invert-colors"}`}/>
                        <p className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>{item.label}</p>
                    </Link>
            )}
            )}
            </div>

            <SignedOut>
                <div className="flex flex-col gap-3">
                    
                        <Link href="/sign-in">
                            <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                                <Image className='lg:hidden' src="/assets/icons/account.svg" width={24} height={24} alt='log in' />
                                <span className='primary-text-gradient max-lg:hidden'>Log In</span>
                            </Button>
                        </Link>



                        <Link href="/sign-up">
                            <Button className='small-medium btn-tertiary light-border-2 min-h-[41px] w-full text-dark400_light900 rounded-lg px-4 py-3 shadow-none'>
                               <Image className='lg:hidden' src="/assets/icons/sign-up.svg" width={24} height={24} alt='sign up' />
                                <span className='max-lg:hidden'>Sign Up</span>
                            </Button>
                        </Link>
                </div>
            </SignedOut>
    </section>
  )
}

export default LeftSidebar