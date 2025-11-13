import {useEffect, useRef, useState} from "react";

export function useCountDown(initialCount: number) {
  const [count, setCount] = useState(initialCount);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((count) => {
        if (--count === 0) {
          clearInterval(intervalRef.current);
        }
        return count;
      });
    }, 1_000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return count;
}
