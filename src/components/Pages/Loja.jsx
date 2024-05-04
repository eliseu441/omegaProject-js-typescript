import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import imgTeste from './img/camisa.jpg'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import getProducts from "./../../api/response.json";
import ShoppingCart from "./Cart";




export default function Loja() {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  pageTitle('Loja');

  const addToCart = (item) => {
    console.log(item)
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
 // Função para remover um item do carrinho
 const removeFromCart = (index) => {
  const newCartItems = [...cartItems];
  newCartItems.splice(index, 1);
  setCartItems(newCartItems);
};

// Função para atualizar a quantidade de um item
const updateQuantity = (index, newQuantity) => {
  const newCartItems = [...cartItems];
  newCartItems[index].quantity = newQuantity;
  setCartItems(newCartItems);
};

// Função para limpar todo o carrinho
const clearCart = () => {
  setCartItems([]);
  // Fechar a janela do carrinho após limpar
  setIsCartOpen(false);
};

// Abrir ou fechar a janela do carrinho
const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
};


  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  return (
    <>
    <div className="conteiner_header">

        {/* Componente carrinho de compras */}
        <ShoppingCart
          cartItems={cartItems}
          toggleCart={toggleCart}
          isCartOpen={isCartOpen}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      </div>
      <div className='containerCard' style={{marginTop: '130px'}}>
        {isLoading
          ? // Renderizar o esqueleto enquanto os dados estão sendo carregados
            Array.from({ length: 8 }).map((_, id) => (
              <li key={id}>
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                
              </li>
            ))
          : // Renderize a lista de produtos
         
          getProducts.products.map((el) => (
            
              <div className="card " onClick={() => addToCart(el)}  key={el.id}>
                <img
                  className="images"
                    src={imgTeste}
                    sizes="100%"
                    alt="Products"
                  />
                <div  className="card-description ">
                  
                  <div className="cardDescription">
                    <div>{el.name}</div>
                    <button class='buttonPrice'>R${el.price}</button>
                  </div>
                  <span>{el.description}</span>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
