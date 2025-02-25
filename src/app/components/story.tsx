"use client";
import { GetItem, Item, ItemId } from "@/api/hn";
import { useEffect, useState } from "react";
import "../globals.css"
import Link from "next/link";
import DateAgo from "./date_ago";
export default function Story({ id, idx }: { id: ItemId, idx: number }) {
    const [story, setStory] = useState<Item | null>(null);
    useEffect(() => {
        setStory(null)
        GetItem(id).then(x => {
            setStory(x)
        })
    }, [id])
    if (story == null) {
        return <p>Loading...</p>
    }
    let url;
    if (story.url != undefined) {
        url = new URL(story.url)
    }
    let time;
    if (story.time != undefined) {
        time = new Date(story.time * 1000)
    }

    return (
        <div className="flex py-2">
            {idx != 0 &&
                <div className="w-min align px-2">
                    <p className="text-right">{idx}</p>
                </div>}
            <div>
                <div className="flex">
                    <a href={story.url}>{story.title} {story.url && <span className="text-slate-500">({url?.host})</span>}</a>
                </div>
                <Link href={`post?id=${story.id}`} className="text-slate-500">{story.score} points | {story.descendants} comments | {time && <DateAgo date={time} />}</Link>
            </div>
        </div>
    )
}