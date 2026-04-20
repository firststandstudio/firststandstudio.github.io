/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import { getCollection } from "astro:content";

export async function getSortedDevlogs(project?: string) {
  const entries = await getCollection("devlogs", ({ data }) => {
    return !data.draft && (!project || data.project === project);
  });

  return entries.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
