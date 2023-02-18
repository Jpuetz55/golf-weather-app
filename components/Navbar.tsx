import Link from 'next/link'
import React from 'react'
import { SessionProvider, signIn, signOut, useSession} from 'next-auth/react'

export default function Navbar() {

  const {data:session, status} = useSession();
  
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>Golf Weather</a>
      </h1>
      <ul className={`'main-nav'${
          !session && status === 'loading' ? 'loading' : 'loaded'
        }`}>
         {!session && status !== 'authenticated' &&(
          <li>
          <Link href='/api/auth/signin'>
              <a onClick={e => {
                signIn('github')
              }}>
                Sign In
              </a>
              </Link>
          </li>
        )}
         {session && status !== 'unauthenticated' && (
          <li>
          <Link href='/api/auth/signout'>
            <a onClick={e => {
              signOut()
            }}>
              Sign Out
            </a>
            </Link>
        </li>
        )}    
        </ul>
    </nav>
  )
}
