import Carousel from 'react-bootstrap/Carousel';

interface SlideData {
  text: string;
  imageUrl: string;
  title: string;
  description: string;
}

interface CustomCarouselProps {
  listData: SlideData[];
  slide?: boolean; // Opcional, por si quieres controlar si el carrusel hace transiciones automáticas o no
}

function CustomCarousel({ listData, slide = true }: CustomCarouselProps) {
  return (
    <Carousel slide={slide}>
      {listData.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.imageUrl}
            alt={`${slide.title} image`}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
