import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewProductsSection from '@/components/NewProductsSection';
import ProductCard, { Product } from '@/components/ProductCard';
import ProductDialog from '@/components/ProductDialog';
import SupportDialog from '@/components/SupportDialog';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

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

  const handleSupportSubmit = () => {
    setSupportMessage('');
    setSupportOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection 
        discountedCount={discountedProducts.length}
        inStockCount={inStockProducts.length}
      />

      <NewProductsSection 
        products={newProducts}
        onProductClick={setSelectedProduct}
      />

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
              <ProductCard 
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductDialog 
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />

      <Button
        onClick={() => setSupportOpen(true)}
        size="lg"
        className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <Icon name="MessageCircle" size={28} />
      </Button>

      <SupportDialog 
        open={supportOpen}
        onOpenChange={setSupportOpen}
        message={supportMessage}
        onMessageChange={setSupportMessage}
        onSubmit={handleSupportSubmit}
      />

      <Footer />
    </div>
  );
};

export default Index;
