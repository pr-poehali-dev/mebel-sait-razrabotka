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
}

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Диван "Комфорт"',
      price: 45900,
      oldPrice: 59900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/d2255900-1829-45a8-a3c6-d0af7652aec6.jpg',
      inStock: true,
      category: 'Мягкая мебель',
      description: 'Современный диван с удобными подушками и прочным каркасом. Идеально подходит для гостиной.',
    },
    {
      id: 2,
      name: 'Обеденный стол "Классик"',
      price: 32500,
      oldPrice: 42000,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/66e394ac-ae1f-4d9e-ac17-8b9ec109aa55.jpg',
      inStock: true,
      category: 'Столы и стулья',
      description: 'Элегантный обеденный стол из массива дерева со стульями. Рассчитан на 6 персон.',
    },
    {
      id: 3,
      name: 'Книжный стеллаж "Модерн"',
      price: 18900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/9fe5baee-edfe-4f51-a0ff-aca4fd30b5a7.jpg',
      inStock: true,
      category: 'Шкафы и стеллажи',
      description: 'Стильный книжный стеллаж с современным дизайном. Подойдет для любого интерьера.',
    },
    {
      id: 4,
      name: 'Кровать "Уют" 160x200',
      price: 28900,
      oldPrice: 35900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/d2255900-1829-45a8-a3c6-d0af7652aec6.jpg',
      inStock: false,
      category: 'Спальня',
      description: 'Удобная кровать с ортопедическим основанием. Размер 160x200 см.',
    },
    {
      id: 5,
      name: 'Шкаф-купе "Лофт"',
      price: 54900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/9fe5baee-edfe-4f51-a0ff-aca4fd30b5a7.jpg',
      inStock: true,
      category: 'Шкафы и стеллажи',
      description: 'Вместительный шкаф-купе с зеркальными дверями. Ширина 2 метра.',
    },
    {
      id: 6,
      name: 'Кресло "Релакс"',
      price: 15900,
      oldPrice: 19900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/d2255900-1829-45a8-a3c6-d0af7652aec6.jpg',
      inStock: true,
      category: 'Мягкая мебель',
      description: 'Комфортное кресло для отдыха с мягкой обивкой.',
    },
  ];

  const discountedProducts = products.filter(p => p.oldPrice);
  const inStockProducts = products.filter(p => p.inStock);

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

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Каталог товаров</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
