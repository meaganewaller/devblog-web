import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import tw, { styled } from "twin.macro";

interface WindowProps {
  id: string;
  active: boolean;
  title: string;
  x: number;
  y: number;
  width?: string;
  height?: string;
  zIndex: string;
  children: React.ReactNode;
  draggable: boolean;
}

interface DraggableWindowProps {
  $draggable: boolean;
}

const DraggableWindow = styled.div<DraggableWindowProps>(({ $draggable }) => [
  tw`cursor-move mt-12 relative flex flex-col px-1 border border-solid border-[#000] bg-[#c0c0c0] shadow-[inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c]`,
  $draggable === false && [tw`!w-full !top-0 !left-0`],
  $draggable && [tw`absolute`],
]);

const WindowHeader = tw.div`
  col-start-2 col-end-3 row-start-1 row-end-2 mr-[1px]
  flex select-none items-center
`;

const WindowButton = tw.button`
  relative block h-[11px] w-[11px] border border-solid border-[#000]
  bg-windowTitleBarButton p-0
  shadow-[inset_1px_1px_0_#fff_-1px_-1px_0_#9c9c9c_inset_1px_1px_0_#fff_inset_-1px_-1px_0_#9c9c9c]
  active:bg-windowTitleBarButtonActive
  active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]
`;

const WindowTitle = tw.div`
  flex flex-1 items-center font-bold before:mx-[5px] before:h-[12px]
  before:flex-1 before:bg-windowTitleBar before:content-[''] after:mx-[5px] after:h-[12px]
  after:flex-1 after:bg-windowTitleBar
`;

export const Window = ({
  id,
  active,
  title,
  x,
  y,
  width,
  height,
  zIndex = "1",
  children,
  draggable,
}: WindowProps) => {
  const windowRef = useRef(null);
  const [_activeWindow, setActiveWindow] = useState(active);

  function sendElementToTop() {
    const elementId = `window-${id}`;
    const element = document.getElementById(elementId);
    if (element) {
      setActiveWindow(true);
      const otherWindows = document.querySelectorAll(
        `[data-another-window]:not(#${elementId})`,
      );
      const maxZIndex = Array.from(otherWindows).reduce((acc, elem) => {
        const elementWithStyle = elem as HTMLElement;
        return Math.max(parseInt(elementWithStyle.style.zIndex) || 0, acc);
      }, 0);
      element.style.zIndex = `${maxZIndex + 1}`;
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
        $draggable={draggable}
        style={{
          width,
          height,
          zIndex,
          top: `${y}px`,
          left: `${x}px`,
        }}
      >
        {/* Header */}
        <WindowHeader className="handle">
          {/* Window buttons */}
          <WindowButton />
          {/* Window title */}
          <WindowTitle>{title}</WindowTitle>
          {/* Resize buttons */}
          <WindowButton className="after:absolute after:left-0 after:top-0 after:h-[5px] after:w-[5px] after:border-solid after:content-[''] active:bg-windowTitleBarButtonActive active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]" />
          <WindowButton className="after:border-top after:border-bottom relative ml-[5px] after:absolute after:left-0 after:right-0 after:top-[3px] after:h-[1px] after:border-solid after:border-accent after:content-[''] active:bg-windowTitleBarButtonActive active:shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]" />
        </WindowHeader>
        {/* Content */}
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 h-full overflow-y-auto overflow-x-hidden border border-solid border-accent bg-background shadow-[1px_1px_0_#fff_-1px_-1px_0_#9c9c9c]">
          {children}
        </div>
        {/* Resizable areas */}
        <div className="col-start-1 col-end-2 row-start-1 row-end-4 cursor-[ew-resize]" />
        <div className="col-start-3 col-end-4 row-start-1 row-end-4 cursor-[ew-resize]" />
        <div className="col-start-1 col-end-4 row-start-3 row-end-4 cursor-[ns-resize]" />
      </DraggableWindow>
    </Draggable>
  );
};
