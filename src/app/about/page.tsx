function FaqEntry({ q, a }: { q: string, a: string }) {
    return <div>
        <h2 className="text-xl py-2">{q}</h2>
        <p>{a}</p>
    </div>
}

export default function Page() {
    const faqs = [
        { q: "What is this?", a: "HN PWA is a Progressive Web App frontend for Hacker News built with Next.js" },
    ]
    return <div>
        {faqs.map(({ q, a }, i) => <FaqEntry key={i} q={q} a={a} />)}
    </div>
}