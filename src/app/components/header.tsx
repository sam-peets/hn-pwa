"use client";

import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full p-2">
            <div className="flex">
                <Link href="/" className="px-2">
                    <h2>HN PWA</h2>
                </Link>
                <Link href="/" className="px-2">top</Link>
                <Link href="/best" className="px-2">best</Link>
                <Link href="/new" className="px-2">new</Link>

            </div>
        </div>
    )
}