import React from "react";
import "./Store.css";
import { Col, Row } from "react-bootstrap";
import storeItems from "../../Data/storeItems.json";
import StoreItem from "../StoreItem/StoreItem";
const Store = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {storeItems.map((item) => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Store;
