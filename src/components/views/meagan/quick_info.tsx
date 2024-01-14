'use client'

import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'

const List = tw.ul`
 list-flower bg-accent-300 list-inside text-justify text-secondary-800 my-0 mx-[15px] py-3 px-[5px]
`

const Item = tw.li`
  relative pl-[20px] leading-[1.5em] p-[2px] text-md
`

const ItemTitle = tw.strong`
  text-secondary-700 w-[90px] inline-block
`

export function QuickInfo() {
  return (
    <>
      <Image
        src='/static/images/avatar/meaganwaller.png'
        width={200}
        height={200}
        alt="Meagan Waller's avatar"
        className='tablet-sm:float-left tablet-sm:mr-32 border-deep-green mx-auto h-[200px] w-[200px] rounded-full border-2'
      />
      <div className='tablet-sm:text-justify text-center'>
        <h1 className="text-deep-green text-center font-venice text-xl capitalize tracking-wide before:pr-[5px] before:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] lg:text-2xl">
          About
        </h1>
      </div>
      <List>
        <Item>
          <ItemTitle>name:</ItemTitle>
          meagan
        </Item>
        <Item>
          <ItemTitle>location:</ItemTitle>
          northeast florida
        </Item>
        <Item>
          <ItemTitle>title:</ItemTitle>
          senior dev consultant @{' '}
          <Link
            href='https://testdouble.com'
            className='bg-deep-green text-off-white hover:bg-vibrant-green hover:text-off-white p-1'
            target='_blank'
          >
            test double
          </Link>
        </Item>
        <Item>
          <ItemTitle>sign:</ItemTitle>
          aries ☼ / aquarius ☽ / taurus ↑
        </Item>
        <Item>
          <ItemTitle>languages:</ItemTitle>
          ruby, typescript, lua
        </Item>
        <Item>
          <ItemTitle>contact:</ItemTitle>
          meagan [at] meaganwaller.com
        </Item>
      </List>
    </>
  )
}
