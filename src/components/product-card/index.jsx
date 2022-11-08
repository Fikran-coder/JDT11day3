import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({
  random,
  productsName,
  productsPrice,
  productsCategory,
  onClick,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        className="product-card"
        onClick={() => navigate(`/detail-product/${onClick}`)}
        hoverable
        cover={
          <img
            alt="example"
            src={`https://picsum.photos/200?random=${random}`}
          />
        }
      >
        <Meta
          title={productsName}
          description={
            <div>
              <div className="ant-card-meta-category">{productsCategory}</div>
              <div className="ant-card-meta-price">Rp. {productsPrice}</div>
            </div>
          }
        />
        <Button
          type="primary"
          onClick={() => navigate(`/detail-product/${onClick}`)}
        >
          Detail Product
        </Button>
      </Card>
    </>
  );
};

export default ProductCard;
