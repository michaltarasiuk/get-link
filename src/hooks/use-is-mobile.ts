import {useSyncExternalStore} from "react";

import {getMobileMedia} from "@/lib/mobile-media";

export function useIsMobile() {
  const isMobile = useSyncExternalStore(
    (onStoreChange) => {
      const mobileMedia = getMobileMedia();
      mobileMedia.addEventListener("change", onStoreChange);
      return () => {
        mobileMedia.removeEventListener("change", onStoreChange);
      };
    },
    () => getMobileMedia().matches,
    () => false,
  );
  return isMobile;
}
