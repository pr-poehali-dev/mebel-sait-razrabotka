import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  discountedCount: number;
  inStockCount: number;
}

const HeroSection = ({ discountedCount, inStockCount }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">Скидки до 40%</h2>
            <p className="text-xl mb-8 opacity-90">
              На всю мягкую мебель и столы! Успейте купить мебель своей мечты по выгодной цене.
            </p>
            <div className="flex gap-4">
              <a href="#catalog">
                <Button size="lg" variant="secondary" className="text-lg font-semibold">
                  Смотреть товары
                </Button>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <Icon name="Tag" size={40} className="mx-auto mb-3 text-secondary" />
                <h3 className="text-2xl font-bold mb-2">{discountedCount}</h3>
                <p className="text-sm opacity-90">Товаров со скидкой</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <Icon name="CheckCircle" size={40} className="mx-auto mb-3 text-secondary" />
                <h3 className="text-2xl font-bold mb-2">{inStockCount}</h3>
                <p className="text-sm opacity-90">Товаров в наличии</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <Icon name="Truck" size={40} className="mx-auto mb-3 text-secondary" />
                <h3 className="text-2xl font-bold mb-2">Бесплатно</h3>
                <p className="text-sm opacity-90">Доставка от 50 000 ₽</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <Icon name="Award" size={40} className="mx-auto mb-3 text-secondary" />
                <h3 className="text-2xl font-bold mb-2">2 года</h3>
                <p className="text-sm opacity-90">Гарантия качества</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
