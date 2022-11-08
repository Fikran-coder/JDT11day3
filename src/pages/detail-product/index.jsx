import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const DetailProduct = () => {
  const [product, setProducts] = useState({});
  const param = useParams();

  const navigate = useNavigate();

  const fetchProduct = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response.data.data.product }; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchProduct(param.id);
    }
  }, [param.id]);

  return (
    //tanpa menggunakan array
    <>
      <div className="text-center">
        <Title level={2} className="text-center">
          Detail Product
        </Title>
        <p>Nama Product: {product.name}</p>
        <p>Harga :{product.price}</p>
        <p>Penjual: {product.ownerId?.name}</p>
        <p>Kategori: {product.categoryId?.name}</p>
        <Button type="primary" onClick={() => navigate(-1)}>
          Pulang
        </Button>
      </div>
    </>
  );
};

export default DetailProduct;
