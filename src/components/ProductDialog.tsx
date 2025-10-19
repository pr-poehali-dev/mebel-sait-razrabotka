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
import { Product } from './ProductCard';

interface ProductDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDialog = ({ product, open, onOpenChange }: ProductDialogProps) => {
  if (!product) return null;

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
            {product.oldPrice && (
              <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg px-3 py-1">
                -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </Badge>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg">{product.description}</p>
            
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
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.oldPrice.toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>
              
              <Button 
                size="lg" 
                className="w-full text-lg"
                disabled={!product.inStock}
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
