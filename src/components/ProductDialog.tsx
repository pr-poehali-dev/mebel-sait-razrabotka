import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product, ProductVariant } from './ProductCard';
import { useState } from 'react';

interface ProductDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart?: (product: Product) => void;
}

const ProductDialog = ({ product, open, onOpenChange, onAddToCart }: ProductDialogProps) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  if (!product) return null;

  const currentVariant = selectedVariant || product.selectedVariant || product.variants[0];
  const finalPrice = product.basePrice + currentVariant.priceModifier;
  const finalOldPrice = product.oldPrice ? product.oldPrice + currentVariant.priceModifier : undefined;

  const handleAddToCart = () => {
    if (onAddToCart && product.inStock) {
      const productWithVariant = { ...product, selectedVariant: currentVariant };
      onAddToCart(productWithVariant);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl">{product.name}</DialogTitle>
          <DialogDescription>
            <Badge variant="outline" className="mt-2">{product.category}</Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {finalOldPrice && (
              <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg px-3 py-1">
                -{Math.round(((finalOldPrice - finalPrice) / finalOldPrice) * 100)}%
              </Badge>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg">{product.description}</p>
            
            <div>
              <h4 className="font-semibold mb-3">Выберите вариант:</h4>
              <div className="space-y-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(variant)}
                    className={`w-full p-3 border rounded-lg text-left transition-all ${
                      currentVariant === variant 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{variant.material}</p>
                        <p className="text-sm text-muted-foreground">{variant.color}</p>
                      </div>
                      {variant.priceModifier !== 0 && (
                        <Badge variant="outline">
                          {variant.priceModifier > 0 ? '+' : ''}
                          {variant.priceModifier.toLocaleString('ru-RU')} ₽
                        </Badge>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Icon 
                name={product.inStock ? "CheckCircle" : "XCircle"} 
                size={24}
                className={product.inStock ? "text-green-500" : "text-red-500"}
              />
              <span className={`text-lg font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                {product.inStock ? "В наличии" : "Под заказ"}
              </span>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">
                  {finalPrice.toLocaleString('ru-RU')} ₽
                </span>
                {finalOldPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {finalOldPrice.toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>
              
              <Button 
                size="lg" 
                className="w-full text-lg"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                {product.inStock ? "Добавить в корзину" : "Сообщить о поступлении"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
