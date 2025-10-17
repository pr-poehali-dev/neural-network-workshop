import Icon from '@/components/ui/icon';

const RiskSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="bg-gradient-to-br from-destructive/20 to-primary/20 rounded-2xl p-8 backdrop-blur">
              <Icon name="AlertTriangle" size={64} className="text-red-500 mb-4" style={{ animation: 'neon-pulse 2s ease-in-out infinite' }} />
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
  );
};

export default RiskSection;
