import React, { useCallback } from 'react';
import Draggable from 'react-draggable';
import { MinusIcon } from "@heroicons/react/24/solid"

export function DraggableWindow({ children, heading, handleMinimize }) {
  const clickMinimizeIcon = useCallback(() => {
    handleMinimize()
  }, [])

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center">
        <h4>{heading}</h4>
        <MinusIcon className="h-4 w-4 cursor-pointer" onClick={clickMinimizeIcon} />
      </div>
    )
  }
  return (
  <Draggable cancel="textarea">
      <div>
        {renderHeader()}
        {children}
      </div>
    </Draggable>
  )
}
