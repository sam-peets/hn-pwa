"use client";

import { GetItem, Item } from "@/api/hn";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Story from "../components/story";
import PostComment from "../components/post_comment";

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id')

    const [post, setPost] = useState<Item | null>(null);
    if (id == null) {
        window.location.href = "/";
        return;
    }
    useEffect(() => {
        GetItem(parseInt(id)).then(x => {
            setPost(x)
        })
    }, [id])
    if (post == null) {
        return <p>
            Loading...
        </p>
    }

    return (
        <div>
            <Story id={parseInt(id)} idx={0} />
            <hr />
            {post.kids &&
                <div>
                    {post.kids.map((x, i) => <PostComment key={i} id={x} level={0} />)}
                </div>
            }
        </div>
    )
}