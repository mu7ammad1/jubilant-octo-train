import Link from 'next/link'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'
import { EnvVarWarning } from './env-var-warning'
import HeaderAuth from "@/components/header-auth";

export default function Nav() {
    return (
        <nav className=' w-full bg-primary-foreground/30 backdrop-blur-md sticky top-0 z-50 flex justify-center'>
            <div className='flex justify-between items-center w-full   py-2 max-w-screen-xl'>
                <div>
                    <Link href="/" className={`text-3xl font-normal flex justify-start items-center w-full text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100 px-3 rounded-full`}>
                        Imagen Fly
                    </Link>
                </div>
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
        </nav>
    )
}