import React from 'react'

const Carsoule = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://tse2.mm.bing.net/th?id=OIP.5nMizQL04HVf7NTFIZ2_XgHaEK&pid=Api&P=0&h=180"
                    style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://tse3.mm.bing.net/th?id=OIP.uDVFPziMZjL5hsvfFXOuZAHaFq&pid=Api&P=0&h=180"
                    style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://tse2.mm.bing.net/th?id=OIP.WlOrcEnOpEWBAO06lMtKqwHaHa&pid=Api&P=0&h=180"
                    style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>

            <div class="carousel-item">
                <img src="https://tse3.mm.bing.net/th?id=OIP.57T9zwyCfJJtn2vMdof99QHaEo&pid=Api&P=0&h=180"
                    style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>

            <div class="carousel-item">
                <img src="https://images.pexels.com/photos/93820/pexels-photo-93820.jpeg?auto=compress&cs=tinysrgb&w=150"
                   style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}

export default Carsoule