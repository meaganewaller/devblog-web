import { useMemo  } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'next/image'

const StyledPin = styled.div`
  &:before {
    content: '';
    width: 20px;
    height: 10px;
    background: rgb(var(--color-sky-blue));
    display: block;
    position: absolute;
    top: -7px;
    left: calc(50% - 15px);
    border-radius: 50%;
    box-shadow:
      0px 11px 3px -2px rgb(37 37 37 / 30%),
      0px 11px 0px 0px rgb(var(--color-sky-blue)),
      inset 0px -1px 4px 1px rgb(37 37 37 / 30%);
  }

  &:after {
    content: '';
    display: block;
    background: rgb(var(--color-sky-blue));
    width: 10px;
    height: 6px;
    position: absolute;
    top: 2px;
    clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);
    left: calc(50% - 9.5px);
    clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);
    box-shadow: inset -3px 2px 4px 0px rgb(37 37 37 / 30%);
  }
`

const Pin = tw(StyledPin)`
  z-1 absolute top-[10px] left-[10px]
`

const PinnedPolaroid = styled(Pin)`
  padding: 15px 10px 0 10px;
  background: #fff;
  display: inline-block;
  box-shadow: 2px 2px 4px 0px rgb(0 0 0 / 26%);
`

const Caption = tw.h1`
  text-lg font-extra text-center h-[30px] flex justify-center items-center -mt-1 m-0
`

import { ProjectResponse } from '@/types'

export interface ProjectLinkProps {
  project: ProjectResponse
}

export const ProjectLink = ({ project }: ProjectLinkProps) => {
  return (
    <>
      <PinnedPolaroid className="top-[30px] left-[40px] w-2 h-2">
        <Caption>
          {project.title}
        </Caption>
        <Image
          src={project.cover_image}
          className="rounded-md w-[200px] h-[200px] z-2 relative inline-block"
          alt={project.title}
          priority
          loading="eager"
          width={200}
          height={200}
        />
      </PinnedPolaroid>
    </>
  )
}
