'use client';

import { useWindowSize } from '@/hooks/use-window-size';
import { Window } from '@/components/core/window';

export function Stats() {
  const size = useWindowSize();
  if (!size.width) return null;
  return (
      <Window
      title="stats.txt"
      x={size.width / 20}
      y={size.height / 10 + 410}
      width="300px"
      height="400px"
      zIndex="1"
      active={true}
      id="buttons-window">
      </Window>
  )
}
