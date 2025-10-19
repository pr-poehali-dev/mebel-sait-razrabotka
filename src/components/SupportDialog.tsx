import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SupportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
  onMessageChange: (message: string) => void;
  onSubmit: () => void;
}

const SupportDialog = ({ open, onOpenChange, message, onMessageChange, onSubmit }: SupportDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              value={message}
              onChange={(e) => onMessageChange(e.target.value)}
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
              onClick={() => onOpenChange(false)}
            >
              Отмена
            </Button>
            <Button
              className="flex-1"
              onClick={onSubmit}
              disabled={!message.trim()}
            >
              <Icon name="Send" size={18} className="mr-2" />
              Отправить
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportDialog;
