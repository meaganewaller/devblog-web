// From https://github.com/donavon/use-interval/blob/master/src/index.tsx

import { useEffect, useRef } from "react";

type Delay = number | null;
// eslint-disable-next-line
type TimerHandler = (...args: any[]) => void;

const useInterval = (callback: TimerHandler, delay: Delay) => {
  const savedCallbackRef = useRef<TimerHandler>();

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    // eslint-disable-next-line
    const handler = (...args: any[]) => savedCallbackRef.current!(...args);

    if (delay !== null) {
      const intervalId = setInterval(handler, delay);
      return () => clearInterval(intervalId);
    } else {
      return;
    }
  }, [delay]);
};

export default useInterval;
