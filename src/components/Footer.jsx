import React from "react";
import styled from "styled-components";
export const Footer=()=>{
    return( 
    <DIV>
    <div className="main">
    <div className="container">
            <div className="first">
                <h1>Clothly.</h1>
                <p id="Cont_a">Fashion is a form of self-expression and autonomy at a particular period and place and in specific context.</p>
            </div>
            <div className="second">
            <div className="subContainer">
             <h3>Home</h3>
                   <a href="#">Men</a>
                   <a href="#">Women</a>
                   <a href="#">Accessories</a>
                   <a href="#">Winter</a>
            </div>
            <div className="subContainer">
            <h3>Company</h3>
                   <a href="#">About us</a>
                   <a href="#">Community</a>
                   <a href="#">Reviews</a>
                   <a href="#">FAQ</a>
            </div>
            <div className="subContainer">
            <h3>Gift Cards</h3>
                   <a href="#">Buy gift card</a>
                   <a href="#">About gift card</a>
                   <a href="#">Redeem gift card</a>
                   <a href="#">Corporate gift card</a>
            </div>
            <div className="subContainer">
            <h3>Social</h3>
                   <a href="#">Instagram</a>
                   <a href="#">Facebook</a>
                   <a href="#">Twitter</a>
                   <a href="#">Linkedin</a>
            </div>
            </div>
          </div>
          <hr></hr>
          <div className="privacy">
            <p>Privacy policy</p>
            <p>All rights revered 2023@Clothly.</p>
            <p>Term & conditions</p>
          </div>
          </div>
          </DIV>
          )
          
};
const DIV=styled.div`
background-color: rgb(240, 232, 232);
hr{
    width:85%;
   border-color:black;
   margin:auto;
}
h3{
    font-size:large;
}
h1{
    font-size:xx-large;
    font-weight:bold;
}
.privacy{
    display:flex;
    justify-content: space-around;
    padding: 10px 0 20px;
    color: rgb(86, 75, 75);
}
.container{
    display: flex;
    justify-content: space-around;
    text-align: left;
    padding: 50px;
}
.first{
    width: 20%;
}
.first p{
    color: rgb(86, 75, 75);
}
.second{
    display: flex;
    justify-content: space-between;
}
.subContainer{
    display: flex;
    flex-direction: column;
    margin-left: 120px;

}
.subContainer a{
    margin-bottom: 1rem;
    text-decoration: none;
    color: rgb(86, 75, 75);
}
.subContainer h3{
    margin-bottom: 2rem;
}
`;