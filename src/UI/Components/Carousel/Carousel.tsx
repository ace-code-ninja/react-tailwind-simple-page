import Slider from 'react-slick'

interface CarouselProps {
  children: React.ReactNode
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    // centerPadding: '100px',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  }
  return <Slider {...settings}>{children}</Slider>
}
