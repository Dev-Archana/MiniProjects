import React from 'react'
import image1 from '../Assets/Banners/image1.png';
import image2 from '../Assets/Banners/image2.png';
import image3 from '../Assets/Banners/image3.png';
import image4 from '../Assets/Banners/image4.png';
import './MainCarousel.css'
function MainCarousel() {
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image1} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={image2} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={image3} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={image4} class="d-block w-100" alt="" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default MainCarousel
