'use client'
import Link from 'next/link'
import React from 'react'
const Dropdown = ({ name, dropdownItems }) => {
  return (
    <div className='dropdown dropdown-hover'>
      <label tabIndex={0} className=''>
        {name}
      </label>
      <ul className='dropdown-content menu bg-base-100 rounded-box w-52 z-[1] p-2 shadow'>
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
