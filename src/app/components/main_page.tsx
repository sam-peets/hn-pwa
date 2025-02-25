"use client";
import StoryList from "./story_list";
import { GetBestStories, ItemId } from "@/api/hn";
import { use, useEffect, useState } from "react";

const LIMIT = 20;
export default function MainPage({ getStoriesFn }: { getStoriesFn: () => Promise<ItemId[] | null> }) {
    const [stories, setStories] = useState<ItemId[] | null>(null)
    const [skip, setSkip] = useState<number>(0)
    useEffect(() => {
        getStoriesFn().then(x => setStories(x))
    }, [])
    function next() {
        setSkip(skip + LIMIT)
    }

    function prev() {
        if (skip == 0) {
            return;
        }
        setSkip(skip - LIMIT)
    }

    return (stories &&
        <div>
            <StoryList skip={skip} limit={LIMIT} ids={stories} />
            <button onClick={prev} className="p-2" disabled={skip <= 0}>Prev</button>
            <button onClick={next} className="p-2" disabled={skip + LIMIT >= stories.length}>Next</button>
        </div>
    );
}

