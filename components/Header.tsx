import Link from 'next/link'
// import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="mx-auto flex justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/" passHref>
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        {/* 在大於 md 也就是 min-width:768px 的時候會顯示 */}
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1">
          Get Started
        </h3>
      </div>

      {/* <img
        src="https://accountabilitlylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt=""
      /> */}
    </header>
  )
}

export default Header
