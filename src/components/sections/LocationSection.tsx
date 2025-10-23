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
              src="https://yandex.ru/map-widget/v1/?ll=131.913193%2C43.115608&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjgyNzk1MBKFAdCg0L7RgdGB0LjRjywg0J_RgNC40LzQvtGA0YHQutC40Lkg0LrRgNCw0LksINCS0LvQsNC00LjQstC-0YHRgtC-0LosINCf0LDRgNGC0LjQt9Cw0L3RgdC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCA0NOKChDEwIgosKe6kIz_g5EVBETnVPa8g6V1AKAE&z=16.89"
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
