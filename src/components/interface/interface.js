export interface InterfaceCardHeader {
  cartItems: InterfaceApi[];
  toggleCart: () => void;
  isCartOpen: boolean;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
}

export interface InterfaceApi {
  name: string;
  description: string;
  photo: string;
  id: number;
  price: number;
  quantity: number;
}
