import { initializeApp } from "firebase/app";
import { Database, get, getDatabase, ref } from "firebase/database";

export type ItemId = number;

export interface Item {
    id: ItemId,
    deleted?: boolean
    type?: string,
    by?: string,
    time?: number,
    text?: string,
    dead?: boolean,
    parent?: ItemId,
    poll?: ItemId,
    kids?: ItemId[],
    url?: string,
    score?: number,
    title?: string,
    descendants?: number,
}

export interface User {
    id: string, // username
    created: number,
    about: string,
    karma: number,
    submitted: ItemId[],
}

abstract class DbRef {
    ref: Database | null = null;
    public abstract get(): Database;
}

const db = new class extends DbRef {
    get(): Database {
        if (this.ref == null) {
            const config = {
                databaseURL: "https://hacker-news.firebaseio.com",
            };
            const app = initializeApp(config);
            this.ref = getDatabase(app);
        }
        return this.ref;
    }
};


export async function GetItem(id: ItemId): Promise<Item | null> {
    const r = ref(db.get(), `/v0/item/${id}`)
    const res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}

export async function GetUser(username: string): Promise<User | null> {
    const r = ref(db.get(), `/v0/user/${username}`)
    const res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}

export async function GetBestStories(): Promise<ItemId[] | null> {
    const r = ref(db.get(), `/v0/beststories`)
    const res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}
export async function GetTopStories(): Promise<ItemId[] | null> {
    const r = ref(db.get(), `/v0/topstories`)
    const res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}
export async function GetNewStories(): Promise<ItemId[] | null> {
    const r = ref(db.get(), `/v0/newstories`)
    const res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}