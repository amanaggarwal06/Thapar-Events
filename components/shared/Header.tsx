import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Navitems from './Navitems'
import Mobilenav from './Mobilenav'

const Header = () => {
    return (
        <header className='w-full border-b'>

            <div className='wrapper flex items-center justify-between'>
                <Link href='/' className='w-36'>
                    <Image 
                src= '/assets/images/logo.svg'
                alt='Evently logo'
                width={500}
                height={500}
                />
                </Link>

                {/* for Desktop Navbar */}
                <SignedIn>
                    <nav className = " sm:hidden md:flex md:justify-between md:w-full md:max-w-xs">
                        <Navitems/>
                    </nav>

                </SignedIn>

                <div className="flex w-32 justify-end gap-3">

                    {/* Setting up clerk */}
                    <SignedIn>
                        <UserButton afterSignOutUrl='/'/>
                        <Mobilenav/>
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className='rounded-full' size='lg'>
                            <Link href='/sign-in'>
                                Login
                            </Link>
                        </Button>
                    </SignedOut>



                </div>
            </div>
        </header>
    )
}

export default Header
