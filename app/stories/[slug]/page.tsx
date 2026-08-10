import { STORIES } from "@/data/stories";
import { StoryDetailClient } from "./StoryDetailClient";

export function generateStaticParams() {
  return STORIES.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <StoryDetailClient params={params} />;
}
