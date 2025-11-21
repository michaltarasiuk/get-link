import {useSyncExternalStore} from "react";

export function useIsServer() {
  const isServer = useSyncExternalStore(
    subscribe,
    () => false,
    () => true,
  );
  return isServer;
}

function subscribe() {
  return () => {};
}
