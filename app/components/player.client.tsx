// I want this to be a client-only component because I'll be using client-only hooks and libs

import useBrowserInfo from "~/.client/hooks";

export default function Player({ videoId }: { videoId: string }) {
  const userAgent = useBrowserInfo();

  return (
    <>
      <div>Iframe for videoId: {videoId}</div>
      <div>
        <p>User Agent: {userAgent}</p>
      </div>
    </>
  );
}
