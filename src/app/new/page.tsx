"use client";
import { GetBestStories, GetNewStories } from "@/api/hn";
import MainPage from "../components/main_page";

export default function Page() {
    return <MainPage getStoriesFn={GetNewStories} />
}