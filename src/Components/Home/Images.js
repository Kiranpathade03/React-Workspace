import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function Images() {
 
  return (
    <div>
      <div className='bg-white hidden md:block' >
        <Carousel>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100"
              src="https://www.layers.shop/cdn/shop/files/collection_banners_3_1.jpg?v=1693573648&width=840"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100"
              src="https://www.layers.shop/cdn/shop/files/Web_banner_7_12.png?v=1702019407&width=840"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100"
              src="https://www.layers.shop/cdn/shop/files/collection_banners_1_1.jpg?v=1693591120&width=840"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100"
              src="https://www.layers.shop/cdn/shop/files/8_eff7d432-be32-4b96-aa9e-95e881cb6cb4.png?v=1681994691&width=640"
              alt="Fourth slide"
            />

          </Carousel.Item>
        </Carousel>

      </div>
      <div className=' md:hidden'>
        <Carousel>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100"
              src="https://www.layers.shop/cdn/shop/files/Mobile_banner_7_12.png?v=1702019426&width=640"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100"
              src="https://www.layers.shop/cdn/shop/files/Mobile_banner_9d19fcd2-2263-449f-8bc2-f96ae04fbc88.png?v=1682934045&width=420"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100"
              src="https://www.layers.shop/cdn/shop/files/collection_banners_Mobile_3_1.jpg?v=1693573679&width=840"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              className="d-block w-100"
              src="https://www.layers.shop/cdn/shop/files/collection_banners_mobile_1_1.jpg?v=1693591159&width=640"
              alt="Fourth slide"
            />

          </Carousel.Item>
        </Carousel>
      </div>
      
      <hr></hr>

    </div>

  )
}
