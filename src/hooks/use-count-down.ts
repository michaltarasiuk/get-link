import {useEffect, useRef, useState} from "react";

export function useCountDown(initialCount: number) {
  const [count, setCount] = useState(initialCount);
  const intervalID = useRef<NodeJS.Timeout>(undefined);
  useEffect(() => {
    intervalID.current = setInterval(() => {
      setCount((count) => {
        if (--count === 0) {
          clearInterval(intervalID.current);
        }
        return count;
      });
    }, 1_000);
    return () => {
      clearInterval(intervalID.current);
    };
  }, []);
  return count;
}
