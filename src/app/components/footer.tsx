"use client";

import Link from "next/link";

export default function Footer() {
    return <div className="w-full flex p-2">
        <Link className="px-2" href="https://github.com/sam-peets/hn-pwa">Github</Link>
        <Link className="px-2" href="/about">About</Link>
    </div>
}