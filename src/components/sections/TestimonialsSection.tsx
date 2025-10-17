import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Михаил Петров',
      role: 'Владелец интернет-магазина электроники',
      text: 'После мастер-класса внедрил ChatGPT для обработки заказов и консультаций. Время отклика сократилось в 5 раз, а конверсия выросла на 35%. Окупилось за первый месяц!',
      avatar: '👨‍💼'
    },
    {
      name: 'Ольга Смирнова',
      role: 'SMM-специалист',
      text: 'Узнала про Midjourney и 10 нейросетей для контента. Теперь создаю посты за 15 минут вместо 2 часов. Качество выросло, клиенты в восторге. Спасибо за практические инструменты!',
      avatar: '👩‍💻'
    },
    {
      name: 'Дмитрий Ковалев',
      role: 'Руководитель отдела продаж',
      text: 'Внедрил AI-чат-бота для квалификации лидов. Команда теперь работает только с горячими клиентами. Продажи выросли на 40%, а расходы на рекламу сократились на 25%.',
      avatar: '👔'
    },
    {
      name: 'Анна Васильева',
      role: 'Фотограф и ретушер',
      text: 'Благодаря мастер-классу освоила нейросети для обработки фото. То, что раньше занимало 3 часа, теперь делаю за 20 минут. Могу брать в 2 раза больше заказов!',
      avatar: '📸'
    },
    {
      name: 'Сергей Иванов',
      role: 'Контент-мейкер на YouTube',
      text: 'Использую нейросети для сценариев, миниатюр и озвучки. Скорость производства контента увеличилась в 3 раза. Канал вырос с 5K до 50K подписчиков за полгода!',
      avatar: '🎬'
    },
    {
      name: 'Елена Морозова',
      role: 'Владелец салона красоты',
      text: 'Автоматизировала записи и напоминания через AI-ассистента. Пропущенных визитов стало на 70% меньше. Клиенты довольны быстрым ответом в любое время суток.',
      avatar: '💅'
    },
    {
      name: 'Александр Соколов',
      role: 'Копирайтер и блогер',
      text: 'После мастер-класса открыл для себя 15+ нейросетей для текстов. Теперь пишу статьи быстрее и интереснее. Доход вырос в 2.5 раза благодаря увеличению объема работы.',
      avatar: '✍️'
    },
    {
      name: 'Мария Новикова',
      role: 'HR-менеджер',
      text: 'Нейросети помогли автоматизировать подбор персонала и составление вакансий. Экономлю 15 часов в неделю! Теперь могу сосредоточиться на качественных собеседованиях.',
      avatar: '👥'
    },
    {
      name: 'Игорь Лебедев',
      role: 'Веб-дизайнер',
      text: 'Использую AI для прототипирования и генерации дизайн-концепций. Презентую клиентам 5-7 вариантов вместо 2-3. Конкуренты отстали, заказов стало в 3 раза больше!',
      avatar: '🎨'
    },
    {
      name: 'Татьяна Кузнецова',
      role: 'Репетитор по английскому',
      text: 'Создала AI-помощника для учеников — он проверяет домашку и объясняет ошибки 24/7. Ученики довольны, результаты улучшились. Смогла взять на 10 учеников больше!',
      avatar: '📚'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Отзывы участников
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Реальные истории людей, которые внедрили нейросети в свой бизнес
        </p>
        
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {testimonials.map((item, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl flex-shrink-0">{item.avatar}</div>
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {item.text}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Icon name="CheckCircle" size={16} />
                        <span>Проверенный участник</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <Icon name="ChevronLeft" size={20} className="inline mr-1" />
          Листайте влево для просмотра всех отзывов
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
