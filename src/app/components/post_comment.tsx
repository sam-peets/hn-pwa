import { GetItem, Item } from "@/api/hn";
import { TimeSince } from "@/util";
import { useEffect, useState } from "react";
export default function PostComment({ id, level }: { id: number, level: number }) {
    const [comment, setComment] = useState<Item | null>(null);
    const [collapse, setCollapse] = useState<boolean>(false);
    const toggleCollapse = () => {
        setCollapse(!collapse)
    }

    useEffect(() => {
        GetItem(id).then(x => {
            setComment(x)
            console.log(x)
        })
    }, [id])

    if (comment == null) {
        return <p>loading...</p>
    }
    if (comment.text == null) {
        return <p>empty comment</p>
    }
    let ago;
    if (comment.time) {
        const date = new Date(comment.time * 1000);
        ago = TimeSince(date);
    }
    return <div className="py-2">
        <div className="flex">
            <p className="text-slate-500 pr-5">{comment.by} | {ago} ago</p>
            <button onClick={toggleCollapse}>[ {collapse ? "+" : "-"} ]</button>
        </div>
        <div className={collapse ? "hidden" : ""}>
            <div dangerouslySetInnerHTML={{ __html: comment.text }} />
            <div className="flex">
                <div className="min-w-2 border-l" />
                <div className="max-w-full">
                    {comment.kids && comment.kids.map(x => <PostComment key={x} id={x} level={level + 1} />)}
                </div>
            </div>
        </div>
    </div>
}