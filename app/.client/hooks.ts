import { useEffect, useState } from "react";

function useBrowserInfo() {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  return userAgent;
}

export default useBrowserInfo;
