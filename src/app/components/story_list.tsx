"use client";
import { ItemId } from "@/api/hn";
import Story from "./story";

export default function StoryList({ ids, skip, limit }: { ids: ItemId[], skip: number, limit: number }) {
    return ids.slice(skip, skip + limit).map((x, i) => <Story key={i} idx={skip + i + 1} id={x} />)
}