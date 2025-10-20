import Icon from '@/components/ui/icon';

const PainSection = () => {
  return (
    <section id="pain" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Каждый день вы теряете время и деньги на рутину</h2>
            <p className="text-lg text-muted-foreground">
              Предприниматели тратят до 40% рабочего времени на ручные задачи и анализ. Наш клиент Михаил терял 5 часов в неделю на отчёты.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-primary">
              «67% компаний признают, что автоматизация — ключ к росту»
            </blockquote>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 opacity-20">
                <img 
                  src="https://cdn.poehali.dev/projects/aff0e44d-d3b8-409d-a0c0-47792caed443/files/112a267c-172f-4fdf-8a79-6b9740cd7150.jpg" 
                  alt="Time loss" 
                  className="w-full h-full object-contain"
                />
              </div>
              <Icon name="TrendingDown" size={64} className="text-primary mb-4 animate-arrow-down" />
              <div className="space-y-4">
                {['Ручной анализ данных', 'Рутинная отчётность', 'Медленные процессы'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-lg group">
                    <div className="relative">
                      <Icon name="X" className="text-destructive" />
                      <Icon 
                        name="Skull" 
                        size={24}
                        className="absolute -top-1 -right-1 text-red-600 opacity-0 group-hover:opacity-100 group-hover:animate-skull-appear" 
                      />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;