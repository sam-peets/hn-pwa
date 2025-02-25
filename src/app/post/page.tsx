"use client";

import { GetItem, Item } from "@/api/hn";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Story from "../components/story";
import PostComment from "../components/post_comment";

function PostView() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id')

    const [post, setPost] = useState<Item | null>(null);

    useEffect(() => {
        if (id == null) {
            return;
        }
        GetItem(parseInt(id)).then(x => {
            setPost(x)
        })
    }, [id])

    if (post == null) {
        return <p>
            Loading...
        </p>
    }
    if (id == null) {
        return;
    }
    return (<div>
        <Story id={parseInt(id)} idx={0} />
        <hr />
        {post.kids &&
            <div>
                {post.kids.map((x, i) => <PostComment key={i} id={x} level={0} />)}
            </div>
        }
    </div>)
}

export default function Page() {
    return (
        <Suspense>
            <PostView />
        </Suspense>
    )
}