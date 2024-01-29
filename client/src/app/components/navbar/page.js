import React from 'react'
import PrelineScript from '../PrelineScript'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 '>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-cream shadow-md text-sm dark:bg-gray-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex md:justifu-center flex-cols flex-wrap basis-full items-center justify-between py-3" aria-label="Global">
          <Link href='/'><img src='KuraKaniLogo.svg' className="w-56 sm:order-1 flex-none text-xl font-semibold dark:text-white" /></Link>
          <div className="sm:order-3 flex items-center gap-x-2">
            <button type="button" className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded border border-gray-200 bg-cream text-gray-800 drop-shadow-xl hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
              <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <div className='flex gap-4'>
              <Link href='/login'><button type="button" className="py-2.5 px-5 inline-flex items-center gap-x-2 text-sm font-medium border rounded bg-default text-cream hover:bg-black hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Login
              </button>
              </Link>
              <Link href='/signup'>
                <button type="button" className="py-2.5 px-5 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-800 rounded  text-gray-900 bg-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Signup
                </button></Link>
            </div>
          </div>
          <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a className="font-semibold text-base text-default dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">Landing</a>
              <a className="font-semibold text-base text-default hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Account</a>
              <a className="font-semibold text-base text-default hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Work</a>
              <a className="font-semibold text-base text-default hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Blog</a>
            </div>
          </div>
        </nav>
      </header>
      <PrelineScript />

    </div>
  )
}

export default Navbar