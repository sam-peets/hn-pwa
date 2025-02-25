import { TimeSince } from "@/util";

export default function DateAgo({ date }: { date: Date }) {
    const ago = TimeSince(date);
    const full = date.toString();

    return <span title={full}>{ago} ago</span>
}