import React from "react"
import { useLocation } from "react-router-dom"
import Banner from "../components/Banner"
import Card from "../components/Card"
import data from "../data/data.json"

export default function Home() {
    const location = useLocation()

    return (
        <div>
            <Banner
                location={location} />
            <section className="cardsContainer">
                {data.map((location, index) => (
                    <Card
                        location={location}
                        key={index} />
            ))}
            </section>
        </div>
    )
}