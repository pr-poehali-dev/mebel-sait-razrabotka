import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MebelStyle</h3>
            <p className="text-gray-300">Мебель для вашего дома с 2010 года</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                info@mebelstyle.ru
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Режим работы</h4>
            <p className="text-gray-300">Пн-Пт: 9:00 - 20:00</p>
            <p className="text-gray-300">Сб-Вс: 10:00 - 18:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
