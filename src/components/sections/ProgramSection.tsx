import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  return (
    <section id="program" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Программа мастер-класса
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              time: '19:00 - 19:30',
              title: 'Введение в нейросети',
              description: 'Что такое ИИ и почему он важен для бизнеса',
              icon: 'Brain'
            },
            {
              time: '19:30 - 20:15',
              title: 'Практические применения',
              description: 'Реальные кейсы автоматизации с помощью нейросетей',
              icon: 'Zap'
            },
            {
              time: '20:15 - 20:45',
              title: 'Инструменты и ресурсы',
              description: 'Обзор доступных решений для вашего бизнеса',
              icon: 'Wrench'
            },
            {
              time: '20:45 - 21:00',
              title: 'Вопросы и ответы',
              description: 'Ответы на ваши вопросы и персональные консультации',
              icon: 'MessageCircle'
            }
          ].map((item, idx) => (
            <Card key={idx} className="hover:border-primary transition-all bg-card/50 backdrop-blur">
              <CardContent className="p-6 flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-primary font-semibold mb-2">{item.time}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
