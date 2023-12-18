export interface ModalProps<T> {
  data: Partial<T>;
  callback: (data: Partial<T>) => void;
}
