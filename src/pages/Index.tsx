import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    
    toast({
      title: "Заявка отправлена!",
      description: `Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`,
    });
    
    e.currentTarget.reset();
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
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
            onClick={() => scrollToSection('register')}
          >
            Зарегистрироваться бесплатно
            <Icon name="ArrowRight" className="ml-2" />
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
                <Icon name="TrendingDown" size={64} className="text-primary mb-4" />
                <div className="space-y-4">
                  {['Ручной анализ данных', 'Рутинная отчётность', 'Медленные процессы'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-lg">
                      <Icon name="X" className="text-destructive" />
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
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="User" size={64} />
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
              { name: 'Анна С.', text: 'Потрясающий опыт! Реальные инструменты и кейсы, которые можно применить сразу.' },
              { name: 'Дмитрий К.', text: 'Конкретные решения для моего бизнеса — сразу внедрил автоматизацию отчётов.' },
              { name: 'Елена М.', text: 'Отличный мастер-класс, всё по делу и бесплатно! Рекомендую всем.' }
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" size={20} />
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
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Регистрация на мастер-класс</h2>
            <p className="text-xl text-muted-foreground">Осталось всего несколько мест!</p>
          </div>

          <Card className="bg-card/80 backdrop-blur border-primary/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg">Имя</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Ваше имя" 
                    required 
                    className="mt-2 bg-background/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-lg">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="example@mail.com" 
                    required 
                    className="mt-2 bg-background/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-lg">Телефон</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+7 999 123-45-67" 
                    required 
                    className="mt-2 bg-background/50"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 animate-pulse-glow bg-primary hover:bg-primary/90"
                >
                  Зарегистрироваться бесплатно
                  <Icon name="CheckCircle" className="ml-2" />
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </div>
            </CardContent>
          </Card>
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
                  <a href="mailto:info@nnschool.ru" className="hover:text-primary transition-colors">
                    info@nnschool.ru
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                    +7 999 123-45-67
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                {['MessageCircle', 'Send', 'Instagram'].map((icon) => (
                  <button
                    key={icon}
                    className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                  >
                    <Icon name={icon} size={20} />
                  </button>
                ))}
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
