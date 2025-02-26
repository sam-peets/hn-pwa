"use client";
import { GetUser, User } from "@/api/hn";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import DateAgo from "../components/date_ago";

function UserBox() {
    const searchParams = useSearchParams();
    const username = searchParams.get("u");
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        if (username == null) {
            return;
        }

        GetUser(username).then(x => {
            setUser(x)
        })
    }, [username])

    if (username == null || user == null) {
        return <p>loading...</p>
    }

    return <div className="grid grid-cols-7 gap-4">
        <p>user:</p>
        <p className="col-span-6">{username} <span className="text-slate-500">created <DateAgo date={new Date(user.created * 1000)} /></span></p>
        <p>about:</p>
        <div className="col-span-6" dangerouslySetInnerHTML={{ __html: user.about }}></div>
        <p>karma:</p>
        <p>{user.karma}</p>
    </div>
}

export default function Page() {
    return <Suspense><UserBox /></Suspense>
}