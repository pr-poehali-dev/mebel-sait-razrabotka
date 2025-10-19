import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewProductsSection from '@/components/NewProductsSection';
import ProductCard, { Product } from '@/components/ProductCard';
import ProductDialog from '@/components/ProductDialog';
import SupportDialog from '@/components/SupportDialog';
import CartDrawer, { CartItem } from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [supportOpen, setSupportOpen] = useState(false);
  const [supportMessage, setSupportMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Диван "Комфорт"',
      basePrice: 45900,
      oldPrice: 59900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/6f5e413a-b193-433c-9ad7-6198b41d2b53.jpg',
      inStock: true,
      category: 'Диваны',
      description: 'Современный диван с удобными подушками и прочным каркасом. Идеально подходит для гостиной.',
      isNew: true,
      variants: [
        { color: 'Серый', material: 'Ткань', priceModifier: 0 },
        { color: 'Синий', material: 'Ткань', priceModifier: 2000 },
        { color: 'Бежевый', material: 'Велюр', priceModifier: 5000 },
      ],
    },
    {
      id: 2,
      name: 'Обеденный стол "Классик"',
      basePrice: 32500,
      oldPrice: 42000,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/9b0a6cff-2091-43ac-ab54-b110f84a08bf.jpg',
      inStock: true,
      category: 'Столы',
      description: 'Элегантный обеденный стол из массива дерева. Рассчитан на 6 персон.',
      variants: [
        { color: 'Дуб натуральный', material: 'Массив дуба', priceModifier: 0 },
        { color: 'Орех', material: 'Массив ореха', priceModifier: 7000 },
        { color: 'Венге', material: 'Массив бука', priceModifier: 5000 },
      ],
    },
    {
      id: 3,
      name: 'Книжный стеллаж "Модерн"',
      basePrice: 18900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/81d52e4a-94d8-4354-92aa-2922ed2d0acd.jpg',
      inStock: true,
      category: 'Стеллажи',
      description: 'Стильный книжный стеллаж с современным дизайном. Подойдет для любого интерьера.',
      isNew: true,
      variants: [
        { color: 'Белый', material: 'Металл', priceModifier: 0 },
        { color: 'Черный', material: 'Металл', priceModifier: 1000 },
        { color: 'Натуральное дерево', material: 'Дерево+металл', priceModifier: 4000 },
      ],
    },
    {
      id: 4,
      name: 'Кровать "Уют" 160x200',
      basePrice: 28900,
      oldPrice: 35900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/2c088bf0-0d76-4b67-8309-a3911bb92fa3.jpg',
      inStock: false,
      category: 'Кровати',
      description: 'Удобная кровать с ортопедическим основанием. Размер 160x200 см.',
      variants: [
        { color: 'Серый', material: 'Ткань', priceModifier: 0 },
        { color: 'Бежевый', material: 'Экокожа', priceModifier: 8000 },
      ],
    },
    {
      id: 5,
      name: 'Шкаф-купе "Лофт"',
      basePrice: 54900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/2a908ca9-86b0-48dc-b374-587c6061e92e.jpg',
      inStock: true,
      category: 'Шкафы',
      description: 'Вместительный шкаф-купе с зеркальными дверями. Ширина 2 метра.',
      variants: [
        { color: 'Черный', material: 'ЛДСП', priceModifier: 0 },
        { color: 'Белый глянец', material: 'МДФ', priceModifier: 12000 },
        { color: 'Дуб', material: 'ЛДСП', priceModifier: 6000 },
      ],
    },
    {
      id: 6,
      name: 'Кресло "Релакс"',
      basePrice: 15900,
      oldPrice: 19900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/1d83cf94-fb39-4471-a08d-3ed4e8f813c7.jpg',
      inStock: true,
      category: 'Кресла',
      description: 'Комфортное кресло для отдыха с мягкой обивкой.',
      isNew: true,
      variants: [
        { color: 'Изумрудный', material: 'Велюр', priceModifier: 0 },
        { color: 'Серый', material: 'Велюр', priceModifier: 0 },
        { color: 'Розовый', material: 'Бархат', priceModifier: 3000 },
      ],
    },
    {
      id: 7,
      name: 'Стул "Элеганс"',
      basePrice: 4900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/425ac5cc-74c2-4b10-96e1-749f88ac030a.jpg',
      inStock: true,
      category: 'Стулья',
      description: 'Деревянный стул с эргономичной спинкой. Идеален для кухни и столовой.',
      variants: [
        { color: 'Белый/бук', material: 'Дерево', priceModifier: 0 },
        { color: 'Черный/дуб', material: 'Дерево', priceModifier: 800 },
        { color: 'Серый/орех', material: 'Дерево', priceModifier: 1200 },
      ],
    },
    {
      id: 8,
      name: 'Стул "Скандинавия"',
      basePrice: 5900,
      oldPrice: 7500,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/425ac5cc-74c2-4b10-96e1-749f88ac030a.jpg',
      inStock: true,
      category: 'Стулья',
      description: 'Стильный стул в скандинавском стиле с мягким сиденьем.',
      isNew: true,
      variants: [
        { color: 'Белый', material: 'Пластик+дерево', priceModifier: 0 },
        { color: 'Серый', material: 'Пластик+дерево', priceModifier: 200 },
      ],
    },
    {
      id: 9,
      name: 'Кресло "Офис Премиум"',
      basePrice: 22900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/49797441-ec18-466d-b6e0-a551f176ba0c.jpg',
      inStock: true,
      category: 'Кресла',
      description: 'Офисное кресло с ортопедической поддержкой и регулировкой высоты.',
      variants: [
        { color: 'Черный', material: 'Экокожа', priceModifier: 0 },
        { color: 'Коричневый', material: 'Натуральная кожа', priceModifier: 15000 },
        { color: 'Серый', material: 'Ткань-сетка', priceModifier: -3000 },
      ],
    },
    {
      id: 10,
      name: 'Журнальный столик "Минимал"',
      basePrice: 8900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/a9483fd0-16d8-4acc-9fd6-a39e932fb85a.jpg',
      inStock: true,
      category: 'Столики',
      description: 'Компактный журнальный столик для гостиной в стиле минимализм.',
      isNew: true,
      variants: [
        { color: 'Золото', material: 'Стекло+металл', priceModifier: 0 },
        { color: 'Хром', material: 'Стекло+металл', priceModifier: -500 },
        { color: 'Черный', material: 'Стекло+металл', priceModifier: 1000 },
      ],
    },
    {
      id: 11,
      name: 'Приставной столик "Лаунж"',
      basePrice: 6500,
      oldPrice: 8900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/d24e9de3-bd06-4177-84cf-d9050bf28715.jpg',
      inStock: true,
      category: 'Столики',
      description: 'Небольшой столик для размещения у дивана или кресла.',
      variants: [
        { color: 'Темный орех', material: 'Массив', priceModifier: 0 },
        { color: 'Светлый дуб', material: 'Массив', priceModifier: 500 },
      ],
    },
    {
      id: 12,
      name: 'Тумбочка "Классик"',
      basePrice: 7900,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/cbdd7bac-ee1f-48df-9a5b-ac132ae240e2.jpg',
      inStock: true,
      category: 'Тумбы',
      description: 'Прикроватная тумбочка с двумя ящиками.',
      variants: [
        { color: 'Белый', material: 'МДФ', priceModifier: 0 },
        { color: 'Серый', material: 'МДФ', priceModifier: 500 },
        { color: 'Дуб', material: 'ЛДСП', priceModifier: 1200 },
      ],
    },
    {
      id: 13,
      name: 'Тумбочка "Модерн Плюс"',
      basePrice: 9500,
      oldPrice: 12500,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/3d6fddfa-a87e-4aea-bfd7-104894e39bdd.jpg',
      inStock: true,
      category: 'Тумбы',
      description: 'Современная тумба с глянцевой поверхностью и выдвижными ящиками.',
      isNew: true,
      variants: [
        { color: 'Черный глянец', material: 'МДФ', priceModifier: 0 },
        { color: 'Белый глянец', material: 'МДФ', priceModifier: 500 },
        { color: 'Красный глянец', material: 'МДФ', priceModifier: 1500 },
      ],
    },
    {
      id: 14,
      name: 'Барный стул "Лофт"',
      basePrice: 7200,
      image: 'https://cdn.poehali.dev/projects/908731b2-690d-4e6b-9bfc-3908d16f0265/files/37b27362-82af-480f-9189-315e9ca37d0b.jpg',
      inStock: true,
      category: 'Стулья',
      description: 'Высокий барный стул с металлическим каркасом в стиле лофт.',
      variants: [
        { color: 'Дерево+черный металл', material: 'Дерево+металл', priceModifier: 0 },
        { color: 'Черная кожа+металл', material: 'Экокожа+металл', priceModifier: 2500 },
      ],
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

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartOpen(true);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity }
        : item
    ));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={totalCartItems}
        onCartClick={() => setCartOpen(true)}
      />

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
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductDialog 
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer 
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
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
