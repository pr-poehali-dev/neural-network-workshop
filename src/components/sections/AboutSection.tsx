import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Что вы получите на мастер-классе
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'Lightbulb',
              title: 'Практические знания',
              description: 'Конкретные инструменты и методы применения ИИ в вашем бизнесе'
            },
            {
              icon: 'Users',
              title: 'Реальные кейсы',
              description: 'Истории успеха компаний, которые внедрили нейросети'
            },
            {
              icon: 'Rocket',
              title: 'План действий',
              description: 'Готовая дорожная карта внедрения технологий'
            }
          ].map((item, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <Icon name={item.icon as any} size={48} className="text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
