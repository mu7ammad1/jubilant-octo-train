import Link from 'next/link'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'
import { EnvVarWarning } from './env-var-warning'
import HeaderAuth from "@/components/header-auth";

export default function Nav() {
    return (
        <div className='flex justify-between items-center w-full sticky top-3 z-50'>
            <div>
                <Link href="/" className={`text-3xl font-normal flex justify-start items-center w-full text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100 bg-background/30 backdrop-blur-md px-3 rounded-full`}>
                    Lexnes
                </Link>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
    )
}