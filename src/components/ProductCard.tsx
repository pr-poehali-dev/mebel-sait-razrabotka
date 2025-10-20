import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export interface ProductVariant {
  color: string;
  material: string;
  priceModifier: number;
}

export interface Product {
  id: number;
  name: string;
  basePrice: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
  category: string;
  description: string;
  isNew?: boolean;
  variants: ProductVariant[];
  selectedVariant?: ProductVariant;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onClick, onAddToCart }: ProductCardProps) => {
  const selectedVariant = product.selectedVariant || product.variants[0];
  const finalPrice = product.basePrice + selectedVariant.priceModifier;
  const finalOldPrice = product.oldPrice ? product.oldPrice + selectedVariant.priceModifier : undefined;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart && product.inStock) {
      onAddToCart(product);
    }
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(product)}
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
        {finalOldPrice && (
          <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg px-3 py-1">
            -{Math.round(((finalOldPrice - finalPrice) / finalOldPrice) * 100)}%
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
        
        <div className="mb-3">
          <p className="text-sm text-muted-foreground mb-1">
            {selectedVariant.material} • {selectedVariant.color}
          </p>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl font-bold text-primary">
            {finalPrice.toLocaleString('ru-RU')} ₽
          </span>
          {finalOldPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {finalOldPrice.toLocaleString('ru-RU')} ₽
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
          onClick={handleAddToCart}
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          {product.inStock ? "В корзину" : "Сообщить о поступлении"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
