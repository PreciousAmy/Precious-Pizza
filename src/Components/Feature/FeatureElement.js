import styled from "styled-components";
import FeaturePic from "../../Images/transfood.png"


export const FeatureContainer = styled.div`
   background: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,76,0.2)), url(${FeaturePic});
   height: 100vh;
   max-height: 600px;
   background-position: center;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #000;
   text-align: center;
   padding: 0 1rem;

  


`

export const FeatureBtn = styled.button`
  font-size: 1.4rem;
  padding:  0.7rem 3rem;
  border: none;
  outline: none;
  background: #e31837;
  border-radius: 3px;
  color: #fff;
  margin-top: 33rem;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;


  }
 
   


`
