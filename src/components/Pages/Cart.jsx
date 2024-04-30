
import React from 'react';

import { TiShoppingCart } from "react-icons/ti";
import {
  Container,
  ContainerShoppingCart,
  ContainerShoppingCartHeader,
  ShoppingCartName,
  ScrollableContainer,
  ContainerButton,
  ButtonClose,
  Button,
  ContainerCardItens,
  ButtonCloseProduct,
  CardItens,
  ContainerButtonQuantity,
  NameProduct,
  Quantity,
  ButtonQuantity,
  ButtonQuantityRight,
  ButtonQuantityLeft,
  ItemQuantity,
  Price,
  ContainerTotal,
  ContainerTotalPurchase,
  TotalPurchase,
} from "./styledComponents/shoppingCart.ts";

export default function ShoppingCart({
  cartItems,
  toggleCart,
  isCartOpen,
  removeFromCart,
  updateQuantity,
  clearCart,
}) {
  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <Container>
      <div className='containerShoppingCart' onClick={toggleCart}>
        {/* Ícone de carrinho */}
        <TiShoppingCart size={25} color='white' />

        {/* Número de itens no carrinho */}
        <div>{cartItems.reduce((total, item) => total + item.quantity, 0)}</div>
      </div >

      {/* Janela do carrinho */}
      {isCartOpen && (
        <div className='shoppingCartOpen'>
          <ContainerShoppingCartHeader>
            <ShoppingCartName>
              Carrinho
              <br /> de Compras
            </ShoppingCartName>
            <ButtonClose onClick={toggleCart}>X</ButtonClose>
          </ContainerShoppingCartHeader>

          <ScrollableContainer>
            {/* Os itens do carrinho são renderizados aqui */}
            <ContainerButton>
              {cartItems.map((item, index) => (
                <ContainerCardItens key={index}>
                  <ButtonCloseProduct onClick={() => removeFromCart(index)}>
                    x
                  </ButtonCloseProduct>
                  <CardItens>
                    <NameProduct>{item.name}</NameProduct>
                    <ContainerButtonQuantity>
                      <Quantity>Qtd</Quantity>
                      <ButtonQuantity>
                        <ButtonQuantityRight
                          onClick={() =>
                            updateQuantity(
                              index,
                              Math.max(item.quantity - 1, 1),
                            )
                          }
                        >
                          -
                        </ButtonQuantityRight>
                        <ItemQuantity>{item.quantity}</ItemQuantity>
                        <ButtonQuantityLeft
                          onClick={() =>
                            updateQuantity(index, item.quantity + 1)
                          }
                        >
                          +
                        </ButtonQuantityLeft>
                      </ButtonQuantity>
                    </ContainerButtonQuantity>
                    <Price>R${item.price}</Price>
                  </CardItens>
                </ContainerCardItens>
              ))}
            </ContainerButton>
          </ScrollableContainer>

          <ContainerTotal>
            <ContainerTotalPurchase>
              <TotalPurchase>Total:</TotalPurchase>

              <TotalPurchase>
                {/* Formata o valor para a moeda brasileira (Real) */}
                {calculateTotal().toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TotalPurchase>
            </ContainerTotalPurchase>

            <Button onClick={clearCart}>Finalizar Compra</Button>
          </ContainerTotal>
        </div>
      )}
    </Container>
  );
}
