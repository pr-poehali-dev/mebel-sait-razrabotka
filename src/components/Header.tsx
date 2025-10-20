import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  return (
    <header className="bg-[#1A1F2C] text-white py-6 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">MebelStyle</h1>
          <nav className="flex gap-6 items-center">
            <a href="#catalog" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Icon name="ShoppingBag" size={20} />
              Каталог
            </a>
            <a href="#about" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Icon name="Info" size={20} />
              О нас
            </a>
            <a href="#contacts" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Icon name="Phone" size={20} />
              Контакты
            </a>
            <Button 
              variant="secondary" 
              onClick={onCartClick}
              className="relative"
            >
              <Icon name="ShoppingCart" size={20} />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 px-2 py-0.5 min-w-[20px] h-5 flex items-center justify-center">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
