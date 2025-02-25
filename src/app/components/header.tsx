"use client";
export default function Header() {
    return (
        <div className="w-full p-2">
            <div className="flex">
                <a href="/" className="px-2">
                    <h2>HN PWA</h2>
                </a>
                <a href="/" className="px-2">top</a>
                <a href="/best" className="px-2">best</a>
                <a href="/new" className="px-2">new</a>

            </div>
        </div>
    )
}