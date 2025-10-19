import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
  category: string;
  description: string;
  isNew?: boolean;
}

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [supportOpen, setSupportOpen] = useState(false);
  const [supportMessage, setSupportMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const products: Product[] = [
    {
      id: 1,
      name: 'Диван "Комфорт"',
      price: 45900,
      oldPrice: 59900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/d2255900-1829-45a8-a3c6-d0af7652aec6.jpg',
      inStock: true,
      category: 'Диваны',
      description: 'Современный диван с удобными подушками и прочным каркасом. Идеально подходит для гостиной.',
      isNew: true,
    },
    {
      id: 2,
      name: 'Обеденный стол "Классик"',
      price: 32500,
      oldPrice: 42000,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/66e394ac-ae1f-4d9e-ac17-8b9ec109aa55.jpg',
      inStock: true,
      category: 'Столы',
      description: 'Элегантный обеденный стол из массива дерева. Рассчитан на 6 персон.',
    },
    {
      id: 3,
      name: 'Книжный стеллаж "Модерн"',
      price: 18900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/9fe5baee-edfe-4f51-a0ff-aca4fd30b5a7.jpg',
      inStock: true,
      category: 'Стеллажи',
      description: 'Стильный книжный стеллаж с современным дизайном. Подойдет для любого интерьера.',
      isNew: true,
    },
    {
      id: 4,
      name: 'Кровать "Уют" 160x200',
      price: 28900,
      oldPrice: 35900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/d2255900-1829-45a8-a3c6-d0af7652aec6.jpg',
      inStock: false,
      category: 'Кровати',
      description: 'Удобная кровать с ортопедическим основанием. Размер 160x200 см.',
    },
    {
      id: 5,
      name: 'Шкаф-купе "Лофт"',
      price: 54900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/9fe5baee-edfe-4f51-a0ff-aca4fd30b5a7.jpg',
      inStock: true,
      category: 'Шкафы',
      description: 'Вместительный шкаф-купе с зеркальными дверями. Ширина 2 метра.',
    },
    {
      id: 6,
      name: 'Кресло "Релакс"',
      price: 15900,
      oldPrice: 19900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/2981f4d0-a809-48b0-96fc-cb81b9ee2e29.jpg',
      inStock: true,
      category: 'Кресла',
      description: 'Комфортное кресло для отдыха с мягкой обивкой.',
      isNew: true,
    },
    {
      id: 7,
      name: 'Стул "Элеганс"',
      price: 4900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/202e6393-c1e1-4f3b-94a8-51dbd61283cf.jpg',
      inStock: true,
      category: 'Стулья',
      description: 'Деревянный стул с эргономичной спинкой. Идеален для кухни и столовой.',
    },
    {
      id: 8,
      name: 'Стул "Скандинавия"',
      price: 5900,
      oldPrice: 7500,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/202e6393-c1e1-4f3b-94a8-51dbd61283cf.jpg',
      inStock: true,
      category: 'Стулья',
      description: 'Стильный стул в скандинавском стиле с мягким сиденьем.',
      isNew: true,
    },
    {
      id: 9,
      name: 'Кресло "Офис Премиум"',
      price: 22900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/2981f4d0-a809-48b0-96fc-cb81b9ee2e29.jpg',
      inStock: true,
      category: 'Кресла',
      description: 'Офисное кресло с ортопедической поддержкой и регулировкой высоты.',
    },
    {
      id: 10,
      name: 'Журнальный столик "Минимал"',
      price: 8900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/8a1cfe91-eafa-4924-a665-8cc4522b5c51.jpg',
      inStock: true,
      category: 'Столики',
      description: 'Компактный журнальный столик для гостиной в стиле минимализм.',
      isNew: true,
    },
    {
      id: 11,
      name: 'Приставной столик "Лаунж"',
      price: 6500,
      oldPrice: 8900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/8a1cfe91-eafa-4924-a665-8cc4522b5c51.jpg',
      inStock: true,
      category: 'Столики',
      description: 'Небольшой столик для размещения у дивана или кресла.',
    },
    {
      id: 12,
      name: 'Тумбочка "Классик"',
      price: 7900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/041b2761-8d24-4ac5-97db-3b6daa8d7d2f.jpg',
      inStock: true,
      category: 'Тумбы',
      description: 'Прикроватная тумбочка с двумя ящиками.',
    },
    {
      id: 13,
      name: 'Тумбочка "Модерн Плюс"',
      price: 9500,
      oldPrice: 12500,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/041b2761-8d24-4ac5-97db-3b6daa8d7d2f.jpg',
      inStock: true,
      category: 'Тумбы',
      description: 'Современная тумба с глянцевой поверхностью и выдвижными ящиками.',
      isNew: true,
    },
    {
      id: 14,
      name: 'Барный стул "Лофт"',
      price: 7200,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/202e6393-c1e1-4f3b-94a8-51dbd61283cf.jpg',
      inStock: true,
      category: 'Стулья',
      description: 'Высокий барный стул с металлическим каркасом в стиле лофт.',
    },
  ];

  const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const discountedProducts = products.filter(p => p.oldPrice);
  const inStockProducts = products.filter(p => p.inStock);
  const newProducts = products.filter(p => p.isNew);

  return (
    <div className="min-h-screen bg-background">
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
                  <h3 className="text-2xl font-bold mb-2">{discountedProducts.length}</h3>
                  <p className="text-sm opacity-90">Товаров со скидкой</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-scale-in">
                <CardContent className="p-6 text-center">
                  <Icon name="CheckCircle" size={40} className="mx-auto mb-3 text-secondary" />
                  <h3 className="text-2xl font-bold mb-2">{inStockProducts.length}</h3>
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

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold">Новинки</h2>
            <Badge className="bg-primary text-white text-lg px-4 py-2">
              <Icon name="Sparkles" size={20} className="mr-2" />
              {newProducts.length} новых товаров
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newProducts.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-64 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white text-lg px-3 py-1">
                    <Icon name="Sparkles" size={16} className="mr-1" />
                    Новинка
                  </Badge>
                  {product.oldPrice && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg px-3 py-1">
                      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{product.category}</Badge>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Каталог товаров</h2>
          
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
                {category !== 'Все' && (
                  <Badge variant="secondary" className="ml-2">
                    {products.filter(p => p.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-64 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-primary text-white text-lg px-3 py-1">
                      <Icon name="Sparkles" size={16} className="mr-1" />
                      Новинка
                    </Badge>
                  )}
                  {product.oldPrice && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg px-3 py-1">
                      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        Нет в наличии
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{product.category}</Badge>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Icon 
                      name={product.inStock ? "CheckCircle" : "XCircle"} 
                      size={20}
                      className={product.inStock ? "text-green-500" : "text-red-500"}
                    />
                    <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                      {product.inStock ? "В наличии" : "Под заказ"}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    {product.inStock ? "В корзину" : "Сообщить о поступлении"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription>
                  <Badge variant="outline" className="mt-2">{selectedProduct.category}</Badge>
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.oldPrice && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg px-3 py-1">
                      -{Math.round(((selectedProduct.oldPrice - selectedProduct.price) / selectedProduct.oldPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-lg">{selectedProduct.description}</p>
                  
                  <div className="flex items-center gap-2">
                    <Icon 
                      name={selectedProduct.inStock ? "CheckCircle" : "XCircle"} 
                      size={24}
                      className={selectedProduct.inStock ? "text-green-500" : "text-red-500"}
                    />
                    <span className={`text-lg font-semibold ${selectedProduct.inStock ? "text-green-600" : "text-red-600"}`}>
                      {selectedProduct.inStock ? "В наличии" : "Под заказ"}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-4xl font-bold text-primary">
                        {selectedProduct.price.toLocaleString('ru-RU')} ₽
                      </span>
                      {selectedProduct.oldPrice && (
                        <span className="text-xl text-muted-foreground line-through">
                          {selectedProduct.oldPrice.toLocaleString('ru-RU')} ₽
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full text-lg"
                      disabled={!selectedProduct.inStock}
                    >
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      {selectedProduct.inStock ? "Добавить в корзину" : "Сообщить о поступлении"}
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Button
        onClick={() => setSupportOpen(true)}
        size="lg"
        className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <Icon name="MessageCircle" size={28} />
      </Button>

      <Dialog open={supportOpen} onOpenChange={setSupportOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="Headphones" size={24} className="text-primary" />
              Техподдержка
            </DialogTitle>
            <DialogDescription>
              Опишите вашу проблему, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ваше сообщение</label>
              <textarea
                className="w-full min-h-[120px] p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Расскажите, чем мы можем помочь..."
                value={supportMessage}
                onChange={(e) => setSupportMessage(e.target.value)}
              />
            </div>
            <div className="bg-secondary/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="Clock" size={18} />
                Время ответа
              </h4>
              <p className="text-sm text-muted-foreground">Обычно мы отвечаем в течение 15 минут</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setSupportOpen(false)}
              >
                Отмена
              </Button>
              <Button
                className="flex-1"
                onClick={() => {
                  setSupportMessage('');
                  setSupportOpen(false);
                }}
                disabled={!supportMessage.trim()}
              >
                <Icon name="Send" size={18} className="mr-2" />
                Отправить
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
    </div>
  );
};

export default Index;