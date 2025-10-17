import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Михаил Петров',
      role: 'CEO интернет-магазина',
      videoUrl: 'https://rutube.ru/video/76d44642d8ebf4e04cfcc823561b4fe0/',
      thumbnail: 'https://cdn.poehali.dev/projects/aff0e44d-d3b8-409d-a0c0-47792caed443/files/e46208d2-e5b0-454f-a40f-240683fa3ad4.jpg'
    },
    {
      name: 'Ольга Смирнова',
      role: 'Маркетолог',
      videoUrl: 'https://rutube.ru/video/2c2bfd77a6c9d06d8bbd1cf4f195f987/',
      thumbnail: 'https://cdn.poehali.dev/projects/aff0e44d-d3b8-409d-a0c0-47792caed443/files/83668a56-1b7a-4bdb-9cc2-233718af28b1.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Отзывы участников
        </h2>
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((item, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2">
                <div className="p-4">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted group">
                    <img 
                      src={item.thumbnail} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {playingVideo === idx ? (
                      <iframe
                        src={`https://rutube.ru/play/embed/${item.videoUrl.split('/video/')[1].replace('/', '')}`}
                        frameBorder="0"
                        allow="clipboard-write; autoplay"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <div 
                        onClick={() => setPlayingVideo(idx)}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon name="Play" size={32} className="text-background ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
