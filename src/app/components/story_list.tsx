"use client";
import { ItemId } from "@/api/hn";
import Story from "./story";

export default function StoryList({ ids, skip, limit }: { ids: ItemId[], skip: number, limit: number }) {
    return ids.slice(skip, skip + limit).map((x, i) => {
        return <div key={i} className="min-h-16 w-full">
            <Story idx={skip + i + 1} id={x} />
        </div>
    })
}