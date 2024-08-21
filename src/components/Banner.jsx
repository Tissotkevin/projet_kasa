import React from "react"
import PropTypes from "prop-types"

const bannerImages = {
    "/": {
        image: require("../assets/home_pic.jpg"),
        text: "Chez vous, partout et ailleurs",
    },
    "/a-propos": {
        image: require("../assets/about_pic.jpg"),
        text: "",
    },
}

export default function Banner({ location }) {
    const currentPath = location.pathname
    const { image, text } = bannerImages[currentPath]

    return (
        <section
            className={`banner ${currentPath === "/" ? "" : "heightAboutBanner"}`}>
            <img src={image}
                alt="Bannière" />
            {currentPath === "/" && <h1>{text}</h1>}
        </section>
    )
}

Banner.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}