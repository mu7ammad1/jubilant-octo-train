import Link from 'next/link'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'
import { EnvVarWarning } from './env-var-warning'
import HeaderAuth from "@/components/header-auth";
import Image from 'next/image';
import ima from '@/assets/images/logoR.svg'

export default function Nav() {
    return (
        <nav className=' w-full bg-white/0 backdrop-blur-md sticky top-0 z-50 flex justify-center'>
            <div className='flex justify-between items-center w-full px-3 py-2 max-w-screen-xl'>
                <div>
                    <Link href="/" className={`text-2xl flex gap-3 justify-start items-center w-full text-neutral-800 dark:text-neutral-100 font-semibold px-3 rounded-full`}>
                        <Image src={ima} alt='image' className='size-10' />
                        <span className='max-sm:hidden'>Imagen Fly</span>
                    </Link>
                </div>
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
        </nav>
    )
}