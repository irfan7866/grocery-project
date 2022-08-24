import React from "react";
import img1 from "../images/img5.png"
import img2 from "../images/img1.jpg"
import img3 from "../images/img2.avif"
import img4 from "../images/img3.jpeg"
import img5 from "../images/img4.jpg"

export default function Slider() {
    return (
        <div>
            
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={img1} class="d-block w-100 p-4" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={img2} class="d-block w-100 p-4" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={img3} class="d-block w-100 p-4" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={img4} class="d-block w-100 p-4" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={img5} class="d-block w-100 p-4" alt="..."/>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

            </div>

        </div>
    )
}