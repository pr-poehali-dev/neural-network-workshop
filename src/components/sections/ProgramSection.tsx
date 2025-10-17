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
          ].map((item, idx) => {
            const getIconAnimation = () => {
              switch(idx) {
                case 0: return 'brain-activate 3s ease-in-out infinite';
                case 1: return 'lightning-sparks 1.5s ease-in-out infinite';
                case 2: return 'wrench-rotate 2s ease-in-out infinite';
                case 3: return '';
                default: return '';
              }
            };

            return (
              <Card key={idx} className="hover:border-primary transition-all bg-card/50 backdrop-blur">
                <CardContent className="p-4 md:p-6 flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center relative overflow-visible flex-shrink-0">
                      <Icon 
                        name={item.icon as any} 
                        size={24} 
                        className="text-primary" 
                        style={{ animation: getIconAnimation() }}
                      />
                      {idx === 3 && (
                        <>
                          <span 
                            className="absolute text-secondary text-xl font-bold"
                            style={{ 
                              animation: 'question-float 2s ease-out infinite',
                              animationDelay: '0s'
                            }}
                          >
                            ?
                          </span>
                          <span 
                            className="absolute text-secondary text-xl font-bold"
                            style={{ 
                              animation: 'question-float 2s ease-out infinite',
                              animationDelay: '0.7s'
                            }}
                          >
                            ?
                          </span>
                          <span 
                            className="absolute text-secondary text-xl font-bold"
                            style={{ 
                              animation: 'question-float 2s ease-out infinite',
                              animationDelay: '1.4s'
                            }}
                          >
                            ?
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-primary font-semibold mb-2">{item.time}</div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;