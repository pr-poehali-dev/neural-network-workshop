import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RegisterSection = () => {
  const [registered, setRegistered] = useState(0);
  const [spotsLeft, setSpotsLeft] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      setRegistered((prev) => {
        if (prev < 40) {
          return prev + 1;
        }
        return prev;
      });
      setSpotsLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="register" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Не упустите возможность
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Зарегистрируйтесь сейчас и получите бонусный чек-лист «10 способов внедрить ИИ в бизнес за неделю»
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-lg">
                <Icon name="Users" className="text-primary" />
                <span>Уже зарегистрировано: <strong>{registered} человек</strong></span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Icon name="Clock" className="text-primary" />
                <span>Осталось мест: <strong>{spotsLeft}</strong></span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 animate-pulse-glow bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="https://t.me/chernikovpsiholog" target="_blank" rel="noopener noreferrer">
                Зарегистрироваться бесплатно
                <Icon name="ArrowRight" className="ml-2" size={24} />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              После регистрации вы получите ссылку на онлайн-трансляцию и напоминание о мероприятии
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegisterSection;