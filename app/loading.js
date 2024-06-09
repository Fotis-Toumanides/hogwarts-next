"use client"

import {CircleLoader} from "react-spinners";

// Next 13 has a default, reserved name loading page as a fallback to show the user that the page is loading
export default function Loading() {
    return (
        <section className="py-24">
            <div className="container items-center">
                <h2 className="text-2xl">Magic is loading...</h2>
                <CircleLoader color="#5b36d6"  />  
            </div>
        </section>
    )
}