'use client'
import Image from 'next/image'
import Link from 'next/link'
import tw from "twin.macro"

const List = tw.ul`
 list-flower list-inside text-justify text-accent-dark my-0 mx-[15px] py-0 px-[5px]
`

const Item = tw.li`
  relative pl-[20px] leading-[1.5em] p-[2px] text-xs
`

const ItemTitle = tw.strong`
  text-accent-dark w-[90px] inline-block
`

export function QuickInfo() {
  return (
  <>
      <Image
        src='/static/images/avatar/meaganwaller.png'
        width={200}
        height={200}
        alt="Meagan Waller's avatar"
        className="tablet-sm:float-left w-[200px] h-[200px] rounded-full border-2 border-accent-dark mx-auto tablet-sm:mr-32"
      />
      <div className="text-center tablet-sm:text-justify">
        <h1 className="lg:text-2xl text-center font-venice text-xl capitalize tracking-wide text-accent-dark before:pr-[5px] before:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')]">
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
            className='bg-accent-dark p-1 text-on-accent decoration-wavy hover:bg-accent hover:text-accent-dark'
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
