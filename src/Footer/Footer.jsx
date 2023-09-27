import React from "react";
import "./Footer.css";
export const Footer = () => {
       return (<div className="main">
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
       )

}