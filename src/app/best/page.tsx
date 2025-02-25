"use client";
import { GetBestStories } from "@/api/hn";
import MainPage from "../components/main_page";
import { Suspense } from "react";

export default function Page() {
    return <Suspense><MainPage getStoriesFn={GetBestStories} /></Suspense>
}