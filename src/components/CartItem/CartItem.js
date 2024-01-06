import React from "react";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../../Data/storeItems.json";
import formatCurrency from "../formatCurrency";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
  const { removeItemsFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "100px", height: "75px", objectFit: "cover" }}
      />

      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "18px" }}>
              x {quantity}{" "}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "18px" }}>
            {" "}
            {formatCurrency(item.price)}{" "}
          </div>
        </div>
      </div>
        <div> {formatCurrency(item.price * quantity)}</div>

      <Button
        variant="danger"
        size="sm"
        onClick={() => removeItemsFromCart(id)}
      >
        <i className="bi bi-x-lg"></i>
      </Button>
    </Stack>
  );
};
export default CartItem;
