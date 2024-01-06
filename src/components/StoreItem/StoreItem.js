import React from "react";
import "./StoreItem.css";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "../formatCurrency";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const StoreItem = ({ id, price, name, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemsFromCart,
  } = useShoppingCart();

  const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex align-items-baseline justify-content-between">
          <h4>{name}</h4>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto  ">
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} className="w-100">
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column justify-content-center"
              style={{ gap: "15px" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "10px" }}
              >
                <Button onClick={() => increaseCartQuantity(id)}>
                  <i className="bi bi-plus-lg"></i>
                </Button>
                <span className="fs-4">1 in the cart</span>
                <Button onClick={() => decreaseCartQuantity(id)}>
                  <i className="bi bi-dash-lg"></i>
                </Button>
              </div>
              <Button
                onClick={() => removeItemsFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
