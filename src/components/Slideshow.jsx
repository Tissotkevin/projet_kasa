import React, { useState } from "react"
import PropTypes from "prop-types"
import arrowLeft from "../assets/arrow_left.png"
import arrowRight from "../assets/arrow_right.png"

export default function Slideshow({imagesList}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentImage = imagesList[currentIndex]

    const slideLeft = () => {
        setCurrentIndex(currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1)
    }
    
    const slideRight = () => {
        setCurrentIndex(currentIndex === imagesList.length - 1 ? 0 : currentIndex + 1)
    }

    return (
        <div className="descriptionAccommodation">
            <img src={currentImage}
                alt="Logement"
                className="imageAccommodation" />
            {imagesList.length === 1 ? null : (
                <div>
                    <img onClick={() => slideLeft()}
                        src={arrowLeft}
                        alt="Précédente" />
                    <p>
                        {currentIndex + 1}/{imagesList.length}
                    </p>
                    <img onClick={() => slideRight()}
                        src={arrowRight}
                        alt="Suivante" />
                </div>
            )}
        </div>
    )
}

Slideshow.propTypes = {
    imagesList: PropTypes.arrayOf(PropTypes.string).isRequired,
}