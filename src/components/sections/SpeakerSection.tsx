import { Card, CardContent } from '@/components/ui/card';

const SpeakerSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Кто спикер мероприятия
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div 
                className="aspect-square rounded-3xl overflow-hidden relative"
                style={{
                  animation: 'speaker-glow 3s ease-in-out infinite'
                }}
              >
                <img 
                  src="https://cdn.poehali.dev/files/6286ecd8-d4f7-44f5-9116-785eb973cef7.png" 
                  alt="Черников Сергей"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Черников Сергей</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Практикующий разработчик с 2017 года, специалист по внедрению ИИ-решений в бизнес. За время работы помог более чем 500 предпринимателям и специалистам из Владивостока освоить искусственный интеллект для увеличения прибыли и автоматизации процессов.
                </p>
                <p className="text-lg text-muted-foreground">
                  Автор уникальных методик работы с нейросетями, которые позволяют получать результат без использования VPN и зарубежных карт. Мой подход основан на практическом применении ИИ в реальных бизнес-задачах.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { value: '7+', label: 'лет в IT' },
                  { value: '10K+', label: 'студентов' },
                  { value: '100+', label: 'проектов' },
                  { value: '6', label: 'направлений' }
                ].map((stat, idx) => (
                  <Card key={idx} className="bg-card/50 backdrop-blur border-primary/30">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;