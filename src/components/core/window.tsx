import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable'
import tw from 'twin.macro'

interface WindowProps {
  id: string
  active: boolean
  title: string
  x: number
  y: number
  width?: string
  height?: string
  zIndex: string
  classList?: string
  children: React.ReactNode
}

const DraggableWindow = tw.div`absolute grid grid-rows-[21px_auto_4px] grid-cols-[4px_auto_4px] border border-solid border-[#000] bg-[#c0c0c0] shadow-[inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] cursor-move`

export const Window = ({ id, active, title, x, y, width, height, zIndex = '1', classList, children }: WindowProps) => {
  const windowRef = useRef(null)
  const [_activeWindow, setActiveWindow] = useState(active)

  function sendElementToTop() {
    const elementId = `window-${id}`
    const element = document.getElementById(elementId)
    if (element) {
      setActiveWindow(true)
      const otherWindows = document.querySelectorAll(`[data-another-window]:not(#${elementId})`)
      const maxZIndex = Array.from(otherWindows).reduce((acc, elem: any) => Math.max(elem?.style.zIndex, acc), 0)
      element.style.zIndex = `${maxZIndex + 1}`
    }
  }

  return (
    <Draggable nodeRef={windowRef} onMouseDown={sendElementToTop}>
      <DraggableWindow
        ref={windowRef}
        onDrag={sendElementToTop}
        onClick={sendElementToTop}
        data-another-window={true}
        key={`window-${id}`}
        id={`window-${id}`}
        className={classList}
        style={{
          top: y,
          left: x,
          width: width,
          height: height,
          zIndex: zIndex,
        }}
      >
        <div className='handle col-start-2 col-end-3 row-start-1 row-end-2 mr-[1px] flex select-none items-center'>
          <button className='relative block h-[11px] w-[11px] border border-solid border-[#000] bg-windowTitleBarButton p-0 shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] active:bg-windowTitleBarButtonActive active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]' />
          <div className="text-neutral-five flex flex-1 items-center font-bold before:mx-[5px] before:h-[12px] before:flex-1 before:bg-windowTitleBar before:content-[''] after:mx-[5px] after:h-[12px] after:flex-1 after:bg-windowTitleBar">
            {title}
          </div>
          <button className="after:border-bottom after:border-accent-third-four after:border-right relative block h-[11px] w-[11px] border border-solid border-[#000] bg-windowTitleBarButton p-0 shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] after:absolute after:left-0 after:top-0 after:h-[5px] after:w-[5px] after:border-solid after:content-[''] active:bg-windowTitleBarButtonActive active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]" />
          <button className="after:border-top after:border-bottom relative ml-[5px] block h-[11px] w-[11px] border border-solid border-[#000] bg-windowTitleBarButton p-0 shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c] after:absolute after:left-0 after:right-0 after:top-[3px] after:h-[1px] after:border-solid after:border-accent after:content-[''] active:bg-windowTitleBarButtonActive active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]" />
        </div>
        <div className='col-start-2 col-end-3 row-start-2 row-end-3 h-full overflow-y-auto overflow-x-hidden border border-solid border-accent bg-background shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]'>
          {children}
        </div>
        <div className='col-start-1 col-end-2 row-start-1 row-end-4 cursor-[ew-resize]' />
        <div className='col-start-3 col-end-4 row-start-1 row-end-4 cursor-[ew-resize]' />
        <div className='col-start-1 col-end-4 row-start-3 row-end-4 cursor-[ns-resize]' />
      </DraggableWindow>
    </Draggable>
  )
}
