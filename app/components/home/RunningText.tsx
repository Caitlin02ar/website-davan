import { client } from "@/sanity/lib/client";
import { bannerQuery } from "@/sanity/lib/queries";

import RunningTextClient from "./RunningTextClient";

export default async function RunningText() {
  const bannerData = await client.fetch(bannerQuery);

  return <RunningTextClient data={bannerData} />;
}