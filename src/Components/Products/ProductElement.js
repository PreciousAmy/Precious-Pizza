import styled from "styled-components";
import ImgVg from "../../Images/imagee.jpg"

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) /2);
  background: #200c06;
  color: snow;
`

export const ProductsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   
   justify-content: center;
   margin:  0 auto;
`

export const ProductCard = styled.div`
   margin: 0 2rem;
   line-height: 2;
   width: 350px;

`
export const ProductImg = styled.img`
  height: 340px;
  min-height: 300px;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 3px 7px #b61839;
  

`
export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2,5vw, 3rem);
  text-align: center;
  text-transform: uppercase;
  font-family: Arial, Helvetica, serif;
  text-shadow: 3px 3px #101110;
  margin-bottom: 5rem;
`

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-transform: capitalize;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-family: sans-serif;
  text-transform: capitalize;
  

`

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`

export const ProductButton = styled.button`
  font-size: 1.1rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 3px;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-in-out;

  &:hover {
      background: #ffc300;
      transition: 0.4s ease-out;
      cursor: pointer;
      color: beige;
    }
`