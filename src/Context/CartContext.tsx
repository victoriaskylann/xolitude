import React, { createContext, useContext, useState, ReactNode } from "react";
import { Photo } from "../Types/ItemTypes";

interface CartItem extends Photo {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  addToCart: (photo: Photo) => void;
  removeFromCart: (photoId: number) => void;
  updateQuantity: (photoId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  const updateItemCount = (cartItems: CartItem[]) => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setItemCount(count);
  };

  const addToCart = (photo: Photo) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === photo.id);
      const updatedItems = existingItem
        ? prevItems.map((item) =>
            item.id === photo.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevItems, { ...photo, quantity: 1 }];

      updateItemCount(updatedItems);
      return updatedItems;
    });
  };

  const removeFromCart = (photoId: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== photoId);
      updateItemCount(updatedItems);
      return updatedItems;
    });
  };

  const updateQuantity = (photoId: number, quantity: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === photoId ? { ...item, quantity } : item
      );
      updateItemCount(updatedItems);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ items, itemCount, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
