'use client';

import { useWindowSize } from '@/hooks/use-window-size';
import { Window } from '@/components/core/window';

export function Buttons() {
  const size = useWindowSize();
  if (!size.width) return null;
  return (
      <Window
      title="buttons.txt"
      x={size.width / 20}
      y={size.height / 10}
      width="300px"
      height="400px"
      zIndex="2"
      active={false}
      id="buttons-window"
      >
      </Window>
  )
}


