"use client";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const ContainerShoppingCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 45px;
  padding: 0 18px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  background: #fff;
  z-index: 0;
  gap: 10px;
`;

const fadeIn = keyframes`
  0% {
		opacity: 0;
		transform: translateX(50px);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

export const ContainerShoppingCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 52px;

  &:hover {
    cursor: pointer;
  }
`;

export const ShoppingCartName = styled.p`
  width: 180px;
  font-size: 27px;
  font-weight: bold;
  color: #fff;
  line-height: 40px;
`;

export const ScrollableContainer = styled.div`
  padding-top: 10px;
  height: 250%;
  overflow-y: auto;
  scroll-behavior: smooth;
  

  /* Scrollbar personalizada no Firefox */
  scrollbar-width: thin;
  scrollbar-color: #000;

  /* Scrollbar personalizada no Chrome, Edge e Safari */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 20px;
    border: 3px solid #000;
  }
`;

export const ContainerButton = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 28px;
`;

export const Button = styled.button`
  width: 100%;
  height: 97px;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  background: #000;
  border: none;
  cursor: pointer;
`;

export const ButtonClose = styled.button`
  position: relative;
  width: 38px;
  height: 38px;
  right: -20px;
  font-size: 15px;
  color: #fff;
  background: #000;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const ContainerCardItens = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #b63714;
  border-radius: 8px;
  width: 354px;
  padding: 23px 23px 23px 0;
  color: #ffff
`;

export const ButtonCloseProduct = styled.button`
  position: relative;
  width: 18px;
  height: 18px;
  top: -71px;
  right: -366px;
  color: #fff;
  background: #000;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const CardItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const ContainerButtonQuantity = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameProduct = styled.span`
  font-size: 13px;
`;

export const Quantity = styled.span`
  font-size: 8px;
  padding-bottom: 8px;
`;

export const ButtonQuantity = styled.div`
  display: flex;
  align-items: center;
  height: 19px;
  padding: 5px 0;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
`;

export const ButtonQuantityRight = styled.button`
  border: 1px solid;
  border-color: transparent #bfbfbf transparent transparent;
  background: none;
  cursor: pointer;
`;
export const ButtonQuantityLeft = styled.button`
  border: 1px solid;
  border-color: transparent transparent transparent #bfbfbf;
  background: none;
  cursor: pointer;
`;

export const ItemQuantity = styled.span`
  font-size: 14px;
  padding: 0 10px;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const ContainerTotal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ContainerTotalPurchase = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 52px;
`;

export const TotalPurchase = styled.p`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
`;
