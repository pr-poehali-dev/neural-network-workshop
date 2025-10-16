import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';
import MatrixBackground from '@/components/MatrixBackground';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const eventDate = new Date('2025-10-21T19:00:00+10:00');
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Brain" className="text-primary" size={32} />
              <span className="text-xl font-bold">Neural School</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['about', 'program', 'testimonials', 'faq', 'register'].map((anchor) => (
                <button
                  key={anchor}
                  onClick={() => scrollToSection(anchor)}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {anchor === 'about' && 'О мастер-классе'}
                  {anchor === 'program' && 'Программа'}
                  {anchor === 'testimonials' && 'Отзывы'}
                  {anchor === 'faq' && 'Вопросы'}
                  {anchor === 'register' && 'Регистрация'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        
        <MatrixBackground />
        
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#00FF99', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#00FF99', stopOpacity: 0.2}} />
            </linearGradient>
          </defs>
          
          {[...Array(25)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            const delay = Math.random() * 5;
            
            return (
              <g key={i}>
                <line
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#00FF99"
                  strokeWidth="1"
                  opacity="0.3"
                  style={{
                    animation: `pulse 3s ease-in-out infinite ${delay}s`
                  }}
                />
                <circle
                  cx={`${x1}%`}
                  cy={`${y1}%`}
                  r="4"
                  fill="url(#neuronGradient)"
                  style={{
                    animation: `float 4s ease-in-out infinite ${delay}s`
                  }}
                />
                <circle
                  cx={`${x2}%`}
                  cy={`${y2}%`}
                  r="4"
                  fill="url(#neuronGradient)"
                  style={{
                    animation: `float 4s ease-in-out infinite ${delay + 1}s`
                  }}
                />
              </g>
            );
          })}
        </svg>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className={`container mx-auto px-4 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Нейросети для бизнеса
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Узнайте, как нейросети увеличивают продажи и экономят время: присоединяйтесь 21 октября в 19:00
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { value: timeLeft.days, label: 'дней' },
              { value: timeLeft.hours, label: 'часов' },
              { value: timeLeft.minutes, label: 'минут' },
              { value: timeLeft.seconds, label: 'секунд' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 animate-pulse-glow bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="https://t.me/chernikovpsiholog" target="_blank" rel="noopener noreferrer">
              Зарегистрироваться бесплатно
              <Icon name="ArrowRight" className="ml-2" />
            </a>
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={18} />
              <span>Партизанский 44 корп.10, Фактура, зал НЕОН</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              <span>21 октября, 19:00</span>
            </div>
          </div>
        </div>
      </section>

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
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur">
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="bg-gradient-to-br from-destructive/20 to-primary/20 rounded-2xl p-8 backdrop-blur">
                <Icon name="AlertTriangle" size={64} className="text-destructive mb-4" />
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="TrendingDown" className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-lg">Падение маржи до 15%</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-lg">Потеря клиентов конкурентам</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-destructive mt-1 flex-shrink-0" />
                    <span className="text-lg">Упущенные возможности</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold">Риски роста без технологий</h2>
              <p className="text-lg text-muted-foreground">
                Без ИИ-решений ваша маржа падает, а конкуренты захватывают рынок. Компания X упустила контракт на 2 млн ₽ из–за ручного анализа.
              </p>
              <blockquote className="border-l-4 border-destructive pl-4 italic text-destructive">
                «45% предприятий теряют клиентов из–за медленной обработки данных»
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="hope" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">Представьте, что за вас всё делает искусственный интеллект</h2>
              <p className="text-lg text-muted-foreground">
                Автоматические отчёты, генерация контента и аналитика в пару кликов. После внедрения ИИ команда Марии освободила 20 часов в месяц.
              </p>
              <blockquote className="border-l-4 border-secondary pl-4 italic text-secondary">
                «Компании, использующие ИИ, увеличивают прибыль на 25%»
              </blockquote>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8 backdrop-blur">
                <Icon name="TrendingUp" size={64} className="text-secondary mb-4" />
                <div className="space-y-4">
                  {['Автоматизация отчётов', 'Генерация контента', 'Быстрая аналитика'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-lg">
                      <Icon name="Check" className="text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Бесплатный мастер-класс</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              За 3 часа вы получите чёткий план внедрения нейросетей в маркетинг, продажи и аналитику вашей компании
            </p>
          </div>

          <div id="program" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'Lightbulb', title: 'Введение в нейросети', desc: 'Основы ИИ для бизнеса' },
              { icon: 'Target', title: 'Кейсы автоматизации', desc: 'Реальные примеры' },
              { icon: 'FileText', title: 'Создание контента', desc: 'Генерация и анализ' },
              { icon: 'Rocket', title: 'План внедрения', desc: 'Шаг за шагом' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <Icon name={item.icon} size={48} className="text-primary mx-auto" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-8 md:flex items-center gap-8">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
                  <img 
                    src="https://cdn.poehali.dev/files/2ed09be3-07b2-43fd-abe7-e97d3a4bbc62.jpg" 
                    alt="Сергей Черников" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">Сергей Черников</h3>
                <p className="text-muted-foreground">
                  Эксперт по ИИ с многолетним опытом внедрения нейросетевых решений в бизнес-процессы. Помог более 500 компаниям автоматизировать процессы и увеличить прибыль.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы участников</h2>
          <p className="text-center text-muted-foreground mb-12">500+ предпринимателей уже обучились</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Анна С.', 
                text: 'Потрясающий опыт! Реальные инструменты и кейсы, которые можно применить сразу.',
                photo: 'https://cdn.poehali.dev/projects/aff0e44d-d3b8-409d-a0c0-47792caed443/files/83668a56-1b7a-4bdb-9cc2-233718af28b1.jpg'
              },
              { 
                name: 'Дмитрий К.', 
                text: 'Конкретные решения для моего бизнеса — сразу внедрил автоматизацию отчётов.',
                photo: 'https://cdn.poehali.dev/projects/aff0e44d-d3b8-409d-a0c0-47792caed443/files/e46208d2-e5b0-454f-a40f-240683fa3ad4.jpg'
              },
              { 
                name: 'Елена М.', 
                text: 'Отличный мастер-класс, всё по делу и бесплатно! Рекомендую всем.',
                photo: 'https://cdn.poehali.dev/projects/aff0e44d-d3b8-409d-a0c0-47792caed443/files/6eff4a4b-efc7-4684-9037-6d87ee1b538e.jpg'
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-secondary/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/50">
                      <img 
                        src={item.photo} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-semibold">{item.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2">
                <Icon name="Shield" className="text-secondary" size={32} />
                <span className="text-lg">Гарантия 100% практического результата</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MessageCircle" className="text-secondary" size={32} />
                <span className="text-lg">Бесплатная консультация после МК</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video-testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Видео-отзывы участников</h2>
          <p className="text-center text-muted-foreground mb-12">Реальные истории людей, изменивших свой бизнес</p>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {[
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
              ].map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-colors overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative aspect-video bg-muted">
                          <img 
                            src={item.thumbnail} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <a 
                            href={item.videoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors"
                          >
                            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                              <Icon name="Play" size={32} className="text-background ml-1" />
                            </div>
                          </a>
                          <div className="absolute top-4 right-4 bg-secondary/90 text-background px-3 py-1 rounded-full text-sm font-semibold">
                            <Icon name="Video" size={16} className="inline mr-1" />
                            2:30
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                          <p className="text-muted-foreground text-sm">{item.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary/20 border-primary/50 hover:bg-primary/30" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary/20 border-primary/50 hover:bg-primary/30" />
          </Carousel>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Хотите узнать больше историй успеха?
            </p>
            <Button 
              variant="outline" 
              className="border-secondary/50 hover:bg-secondary/10"
              asChild
            >
              <a href="https://t.me/chernikovgpt" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" />
                Присоединяйтесь к сообществу
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Вопросы и ответы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Нужно ли предварительное знание ИИ?',
                a: 'Нет, мастер-класс рассчитан на участников без опыта. Мы начнём с основ и постепенно перейдём к практическим решениям.'
              },
              {
                q: 'Что взять с собой?',
                a: 'Ноутбук и блокнот для заметок. Все материалы будут предоставлены, но лучше иметь возможность сразу попробовать инструменты.'
              },
              {
                q: 'Как добраться?',
                a: 'Партизанский 44 корп. 10, Фактура, зал НЕОН. Удобная транспортная доступность, парковка рядом.'
              },
              {
                q: 'Действительно ли это бесплатно?',
                a: 'Да, мастер-класс полностью бесплатный. Это наш способ познакомить предпринимателей с возможностями ИИ.'
              },
              {
                q: 'Что будет после мастер-класса?',
                a: 'Вы получите записи, материалы и бесплатную консультацию. Также возможность продолжить обучение на углублённых курсах.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="register" className="py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Регистрация на мастер-класс</h2>
          <p className="text-xl text-muted-foreground mb-8">Осталось всего несколько мест!</p>
          
          <Button 
            size="lg" 
            className="text-lg px-12 py-8 animate-pulse-glow bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="https://t.me/chernikovpsiholog" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="mr-2" size={24} />
              Зарегистрироваться через Telegram
              <Icon name="ArrowRight" className="ml-2" />
            </a>
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Нажмите кнопку, чтобы перейти в Telegram и зарегистрироваться
          </p>
        </div>
      </section>

      <footer className="py-12 bg-card/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Brain" className="text-primary" size={32} />
                <span className="text-xl font-bold">Neural School</span>
              </div>
              <p className="text-muted-foreground">Образовательные программы по нейросетям и ИИ для бизнеса</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <a href="mailto:chernikovru@yandex.ru" className="hover:text-primary transition-colors">
                    chernikovru@yandex.ru
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79811292499" className="hover:text-primary transition-colors">
                    +7 981 129-24-99
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a
                  href="https://t.me/chernikovgpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                >
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Neural Networks School. Все права защищены.</p>
            <div className="flex justify-center gap-6 mt-4">
              <button className="hover:text-primary transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-primary transition-colors">Пользовательское соглашение</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;