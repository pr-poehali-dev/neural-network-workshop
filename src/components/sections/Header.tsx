import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'О мастер-классе' },
    { id: 'program', label: 'Программа' },
    { id: 'testimonials', label: 'Отзывы' },
    { id: 'faq', label: 'Вопросы' },
    { id: 'register', label: 'Регистрация' }
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Brain" className="text-primary" size={32} />
            <span className="text-xl font-bold">Neural School</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-sm hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="text-left text-base hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
