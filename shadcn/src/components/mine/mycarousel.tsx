import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const MyCarousel = () => {
  return (
// 33% of the carousel width.
<Carousel>
  <CarouselContent className="-ml-2 md:-ml-4">
    <CarouselItem className="pl-2 md:pl-4">hello</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">world</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">poop</CarouselItem>
  </CarouselContent>
</Carousel>
  );
};

export default MyCarousel;