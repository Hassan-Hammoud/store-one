import React from "react";
import "./StoreItem.css";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "../formatCurrency";

const StoreItem = ({ id, price, name, imgUrl }) => {
  const quantity = 1;
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "350px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex align-items-baseline justify-content-between">
          <h4>{name}</h4>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto  ">
          {quantity === 0 ? (
            <Button className="w-100">Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column justify-content-center"
              style={{ gap: "15px" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "10px" }}
              >
                <Button>
                  <i class="bi bi-plus-lg"></i>
                </Button>
                <span className="fs-4">1 in the cart</span>
                <Button>
                  <i class="bi bi-dash-lg"></i>
                </Button>
              </div>
              <Button variant="danger" size="sm">
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
