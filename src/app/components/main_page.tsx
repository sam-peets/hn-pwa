"use client";
import StoryList from "./story_list";
import { ItemId } from "@/api/hn";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LIMIT = 20;
export default function MainPage({ getStoriesFn }: { getStoriesFn: () => Promise<ItemId[] | null> }) {
    const [stories, setStories] = useState<ItemId[] | null>(null)
    const searchParams = useSearchParams();

    const page_s = searchParams.get("p")
    let page;

    if (page_s != null) {
        page = parseInt(page_s);
    } else {
        page = 0;
    }

    useEffect(() => {
        getStoriesFn().then(x => setStories(x))
    }, [getStoriesFn])

    return (stories &&
        <div>
            <StoryList skip={page * LIMIT} limit={LIMIT} ids={stories} />

            <Link href={`/?p=${page - 1}`} className={`p-2 ${page == 0 ? 'pointer-events-none text-slate-500' : ''}`}>Prev</Link>
            <Link href={`/?p=${page + 1}`} className={`p-2 ${(page + 1) * LIMIT >= stories.length ? 'pointer-events-none text-slate-500' : ''}`}>Next</Link>
        </div>
    );
}

