import firebase, { initializeApp } from "firebase/app";
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
            var config = {
                databaseURL: "https://hacker-news.firebaseio.com",
            };
            let app = initializeApp(config);
            this.ref = getDatabase(app);
        }
        return this.ref;
    }
};


export async function GetItem(id: ItemId): Promise<Item | null> {
    let r = ref(db.get(), `/v0/item/${id}`)
    let res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}

export async function GetUser(username: string): Promise<User | null> {
    let r = ref(db.get(), `/v0/user/${username}`)
    let res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}

export async function GetBestStories(): Promise<ItemId[] | null> {
    let r = ref(db.get(), `/v0/beststories`)
    let res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}
export async function GetTopStories(): Promise<ItemId[] | null> {
    let r = ref(db.get(), `/v0/topstories`)
    let res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}
export async function GetNewStories(): Promise<ItemId[] | null> {
    let r = ref(db.get(), `/v0/newstories`)
    let res = await get(r);
    if (!res.exists) {
        return null;
    }
    return res.val();
}