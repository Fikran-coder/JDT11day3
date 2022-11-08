import React, { useEffect, useState } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../services/api";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCities = async () => {
    try {
      const url = "/api/v1/city/";
      const response = await api.get(url);
      const payload = [...response.data.data.cities]; //masuk kedalam data dan ke citties
      console.log(payload);
      setCities(payload);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchCities();
  }, []);

  const fetchProduct = async () => {
    try {
      const url = "/api/v1/products";
      const response = await api.get(url);
      const payload = [...response.data.data.products]; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Banner />
      <h1 className="text-center">CITIES</h1>
      <div className="bg-primary text-white text-center grid grid-cols-5 gap-4 m-5 rounded">
        {cities.map((item) => {
          //bila pakai kurung kurawal gunakan return, key di dalam div atau nama variable
          return <span key={item.id}>{item.name}</span>;
          //item.id untuk mengurutkan berdasarkan id
        })}
      </div>

      {/* <h1 className="text-center">Product</h1>
      <div className="bg-primary text-white text-center grid grid-cols-5 gap-4 m-5 rounded"> */}
      {/* {products.map((item) => {
          return (
            //bisa pakai return atau cara cepat lain
            <span key={item.id}>
              {item.name}
              <br />
              {item.price}
            </span>
          );
          //item.id untuk mengurutkan berdasarkan id
        })} */}
      {/* </div> */}
      <div className="grid grid-cols-4 gap-10 mt-5 m-5">
        {products.map(
          (
            item //tanpa return gunakan kurung biasa
          ) => (
            //LIAT DI PRODUCT CARD
            <ProductCard
              key={item.id}
              productsName={item.name}
              productsCategory={item.category}
              productsPrice={item.price}
              onClick={item.id}
              // random={Math.random()}
            />
          )
        )}
        ;
      </div>
    </>
  );
};

export default HomePage;

//TANPA MENGGUNAKAN MAP BUKA DETAIL PRODUCT
