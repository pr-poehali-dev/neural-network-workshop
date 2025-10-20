import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Успешно!",
          description: "Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
        });
        setName('');
        setPhone('');
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-card rounded-xl border border-border shadow-xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-foreground mb-2">Регистрация</h2>
        <p className="text-muted-foreground">Оставьте заявку, и мы свяжемся с вами</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Имя
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Номер телефона
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+7 (999) 123-45-67"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
            className="h-11"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-11 text-base font-semibold"
          disabled={loading}
        >
          {loading ? (
            <>
              <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Icon name="Send" className="mr-2 h-4 w-4" />
              Отправить заявку
            </>
          )}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-6">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </div>
  );
};

export default RegistrationForm;
