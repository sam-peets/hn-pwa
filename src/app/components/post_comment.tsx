import { GetItem, Item } from "@/api/hn";
import { useEffect, useState } from "react";
import DateAgo from "./date_ago";
export default function PostComment({ id, level }: { id: number, level: number }) {
    const [comment, setComment] = useState<Item | null>(null);
    const [collapse, setCollapse] = useState<boolean>(false);
    const toggleCollapse = () => {
        setCollapse(!collapse)
    }

    useEffect(() => {
        GetItem(id).then(x => {
            setComment(x)
        })
    }, [id])

    if (comment == null) {
        return <p>loading...</p>
    }
    if (comment.text == null) {
        return <></>
    }
    let date;
    if (comment.time) {
        date = new Date(comment.time * 1000);
    }
    return <div className="py-2">
        <div className="flex">
            <button onClick={toggleCollapse}>[ {collapse ? "+" : "-"} ]</button>
            <p className="text-slate-500 pl-3">{comment.by} | {date && <DateAgo date={date} />}</p>
        </div>
        <div className={collapse ? "hidden" : ""}>
            <div dangerouslySetInnerHTML={{ __html: comment.text }} />
            <div className="flex">
                <div className="min-w-2 border-l border-slate-500" />
                <div className="max-w-full">
                    {comment.kids && comment.kids.map(x => <PostComment key={x} id={x} level={level + 1} />)}
                </div>
            </div>
        </div>
    </div>
}