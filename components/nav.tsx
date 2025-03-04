import React from 'react'
import Link from 'next/link'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'
import { EnvVarWarning } from './env-var-warning'
import HeaderAuth from "@/components/header-auth";
import { Button } from './ui/button';
import { DraftingCompass, TorusIcon } from 'lucide-react';

export default function Nav() {
    return (
        <div className='flex justify-between items-center w-full p-3'>
            <div>
                <Link href="/" className={`text-3xl font-normal flex justify-start items-center w-full text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100`}>
                    Lexnes
                </Link>
            </div>
            <div className='*:*:gap-2'>
                <Link href={'/tools'}>
                    <Button variant={'ghost'} size={'sm'} className='rounded-2xl'>
                        <TorusIcon className='w-4 h-4' /> Tools
                    </Button>
                </Link>
                <Link href={'/pricing'}>
                    <Button variant={'ghost'} size={'sm'} className='rounded-2xl'>
                        <DraftingCompass className='w-4 h-4' /> Pricing
                    </Button>
                </Link>
                <Button variant={'ghost'} size={'sm'} className='rounded-2xl'>
                    <TorusIcon className='w-4 h-4' /> Documentation
                </Button>

            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
    )
}