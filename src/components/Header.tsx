import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-[#1A1F2C] text-white py-6 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">MebelStyle</h1>
          <nav className="flex gap-6">
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
