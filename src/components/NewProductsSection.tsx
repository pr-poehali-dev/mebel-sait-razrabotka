import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from './ProductCard';

interface NewProductsSectionProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const NewProductsSection = ({ products, onProductClick }: NewProductsSectionProps) => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Новинки</h2>
          <Badge className="bg-primary text-white text-lg px-4 py-2">
            <Icon name="Sparkles" size={20} className="mr-2" />
            {products.length} новых товаров
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white"
              onClick={() => onProductClick(product)}
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
  );
};

export default NewProductsSection;
