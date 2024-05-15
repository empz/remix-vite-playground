import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Player from "~/components/player.client";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getData = async (videoId: string) => {
  await sleep(500);

  return [1, 2, 3];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const videoId = params.videoId!;
  const data = await getData(videoId);

  if (!videoId) throw json("Not Found", { status: 404 });
  if (!data) throw json("Not Found", { status: 404 });

  return json({ videoId, data });
}

export default function PlayerRoute() {
  const { videoId, data } = useLoaderData<typeof loader>();

  return (
    <>
      Playing {videoId}
      {JSON.stringify(data)}
      <Player videoId={videoId} />
    </>
  );
}
