import { Content, Hero } from "@/components/index"
import Seo from "@/components/Seo"
import React from "react"

const Home = () => {
    return (
        <>
            <Seo />

            <Hero />
            <Content />
        </>
    )
}

export default Home
