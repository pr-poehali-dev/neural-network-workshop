import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import PainSection from '@/components/sections/PainSection';
import RiskSection from '@/components/sections/RiskSection';
import HopeSection from '@/components/sections/HopeSection';
import AboutSection from '@/components/sections/AboutSection';
import SpeakerSection from '@/components/sections/SpeakerSection';
import ProgramSection from '@/components/sections/ProgramSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import RegisterSection from '@/components/sections/RegisterSection';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
      <Header onNavigate={scrollToSection} />
      <HeroSection isVisible={isVisible} timeLeft={timeLeft} />
      <PainSection />
      <RiskSection />
      <HopeSection />
      <AboutSection />
      <SpeakerSection />
      <ProgramSection />
      <TestimonialsSection />
      <FAQSection />
      <RegisterSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;