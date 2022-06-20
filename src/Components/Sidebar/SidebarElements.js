import styled  from "styled-components";
import { Link} from 'react-router-dom'
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 350px;
  height: 100%;
  background: #f2f7ff;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.5s ease-out;
  right: ${({ isOpen }) => (  isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
      width: 100%;

      
  }

`;

export const CloseIcon = styled(FaTimes)`
  color: black;

`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none

`

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 70px 70px 70px;
  text-align: center;
  

  @media screen and (max-width: 480px){
      grid-template-rows: 50px 50px 50px 50px;
      
  }
`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #021a05;
  cursor: pointer;

  &:hover {
      color: #e31837;
      font-size: 2rem;
      transition: 0.5s ease-in-out;
  }

  
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute =styled(Link)`
   background: #000;
   white-space: nowrap;
   padding: 16px 64px;
   color: snow;
   font-size: 18px;
   border-radius: 5px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: 0.5s ease-in-out;
   text-decoration: none;

   &:hover {
    transition: 0.5s ease-in-out;
    background: #e31837;
    color: #000;
       
   }


`