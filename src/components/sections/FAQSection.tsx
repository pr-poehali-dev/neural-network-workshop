import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Нужны ли технические знания для участия?',
      answer: 'Нет, мастер-класс рассчитан на предпринимателей без технического бэкграунда. Мы объясняем всё простым языком.'
    },
    {
      question: 'Сколько стоит участие?',
      answer: 'Мастер-класс полностью бесплатный. Это наш вклад в развитие бизнес-сообщества.'
    },
    {
      question: 'Будет ли запись?',
      answer: 'Да, запись будет доступна всем зарегистрированным участникам в течение 48 часов после мероприятия.'
    },
    {
      question: 'Можно ли задать вопросы во время мастер-класса?',
      answer: 'Конечно! У нас будет специальная сессия вопросов-ответов, плюс вы сможете задать вопросы в чате.'
    },
    {
      question: 'Что если я не смогу присутствовать онлайн?',
      answer: 'Не проблема! Зарегистрируйтесь, и мы пришлём вам запись мастер-класса.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
