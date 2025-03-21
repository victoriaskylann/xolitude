import React from "react";
import styled from "styled-components";
import { useCart } from "../Context/CartContext";
import { Button } from "react-bootstrap";

export const Cart = () => {
  const { items, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (
    photoId: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(photoId, newQuantity);
  };

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      <div className="cart-content">
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <CartItem key={item.id}>
                <div className="item-image">
                  <img src={item.smallImage} alt={item.title} />
                </div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p className="location">{item.location}</p>
                  <div className="controls">
                    <select
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      className="quantity-select"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </CartItem>
            ))}
            <div className="cart-summary">
              <Button variant="primary" size="lg">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 4vh 4vw;
  min-height: calc(100vh - 120px);
  background-color: #eeeeee;

  h1 {
    font-family: "Tenor Sans", sans-serif;
    color: #252525;
    margin-bottom: 2rem;
  }

  .cart-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .cart-summary {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;
    text-align: right;
  }
`;

const CartItem = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  .item-image {
    width: 150px;
    margin-right: 2rem;

    img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  }

  .item-details {
    flex: 1;

    h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #252525;
    }

    .location {
      color: #666;
      margin: 0.5rem 0;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    }

    .quantity-select {
      padding: 0.375rem 0.75rem;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      background-color: white;
    }
  }
`;
