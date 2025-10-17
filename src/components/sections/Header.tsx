import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  return (
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
                onClick={() => onNavigate(anchor)}
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
  );
};

export default Header;
