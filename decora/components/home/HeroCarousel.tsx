import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import hero1 from "@/public/images/image01.jpg";
import hero2 from "@/public/images/image02.jpg";
import hero3 from "@/public/images/image03.jpg";
import hero4 from "@/public/images/image04.jpg";

const carouselImages = [hero1, hero2, hero3, hero4];

function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="p-1 m-0.5">
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-96 rounded-xl object-cover"
                      priority
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
