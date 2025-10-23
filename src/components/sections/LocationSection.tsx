const LocationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ГЕОЛОКАЦИЯ
          </h2>
          <p className="text-lg text-muted-foreground">
            Партизанский проспект, 44к10, Владивосток
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=131.902080%2C43.127437&z=16&pt=131.902080,43.127437,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'relative' }}
              title="Яндекс.Карты - Офис"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;