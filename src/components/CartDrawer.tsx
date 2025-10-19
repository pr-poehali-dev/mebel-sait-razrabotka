import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Product } from './ProductCard';

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onClearCart: () => void;
}

const CartDrawer = ({ 
  open, 
  onOpenChange, 
  items, 
  onRemoveItem, 
  onUpdateQuantity,
  onClearCart 
}: CartDrawerProps) => {
  const total = items.reduce((sum, item) => {
    const variant = item.selectedVariant || item.variants[0];
    const price = item.basePrice + variant.priceModifier;
    return sum + (price * item.quantity);
  }, 0);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl flex items-center gap-2">
            <Icon name="ShoppingCart" size={24} />
            Корзина
            {totalItems > 0 && (
              <Badge className="ml-2">{totalItems}</Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            {items.length === 0 ? 'Ваша корзина пуста' : `${items.length} товар(ов) в корзине`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <Icon name="ShoppingCart" size={64} className="text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground mb-4">Корзина пуста</p>
              <Button onClick={() => onOpenChange(false)}>
                Продолжить покупки
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {items.map((item) => {
                  const variant = item.selectedVariant || item.variants[0];
                  const price = item.basePrice + variant.priceModifier;
                  
                  return (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {variant.material} • {variant.color}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">
                            {(price * item.quantity).toLocaleString('ru-RU')} ₽
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-destructive"
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Итого:</span>
                  <span className="text-2xl text-primary">{total.toLocaleString('ru-RU')} ₽</span>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={onClearCart}
                  >
                    <Icon name="Trash2" size={18} className="mr-2" />
                    Очистить корзину
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
