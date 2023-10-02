import React from "react";
import styled from "styled-components";
export const Footer = () => {
    return (
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
const DIV = styled.div`
background-color: #F9F9F9;
margin-top: 60px;
hr{
    width:85%;
    border-color:black;
    margin:auto;
}
h3{
    font-size:large;
    font-weight: 600;
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
/* mobile screen for small size */
@media screen and (max-width: 475px) {
.privacy{
    margin:10px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    text-align:center;
    padding:20px;
    color: rgb(86, 75, 75);
}
.container{
    display: flex;
    flex-direction:column;
    text-align: left;
}
.subContainer{
    display: flex;
    flex-direction: column;
    margin:10px;
}
.second{
    display: flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    margin:auto;
}
.first{
    width: 100%;
    margin-bottom:40px;
}
}
/* mobile screen for medium size */
@media screen and (min-width: 476px) and (max-width: 768px){
    .second {
        flex-wrap: wrap;
    }
    .first {
        width: 100%;
    }
    .first p {
        color: rgb(86, 75, 75);
        width: 162%;
    }
    .privacy {
        flex-wrap: wrap;
        gap: 10px;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px){
    .container {
        margin-left: 10%;
    }
    .subContainer {
        margin-left: 37px;
        width: 156px;
    }
    .second {
        margin-left: 46px;
        flex-wrap: wrap;
    }
}
@media screen and (min-width: 768px) and (max-width: 856px){
    .container {
        margin-left: 0;
    }
    .subContainer {
        margin-left: 15px;
    }
}
`;