import { useCallback, useEffect, useState } from "react";

type Props = {};

function useInternet({}: Props) {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);

  const updateNetworkStatus = useCallback(
    () => setNetwork(window.navigator.onLine),
    []
  );

  useEffect(() => {
    window.addEventListener("offline", updateNetworkStatus);

    window.addEventListener("online", updateNetworkStatus);

    return () => {
      window.removeEventListener("offline", updateNetworkStatus);

      window.removeEventListener("online", updateNetworkStatus);
    };
  });

  return isOnline;
}

export default useInternet;
