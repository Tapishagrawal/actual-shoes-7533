import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export const Payment = () => {

    const onToken = (token) => {
        console.log(token);
    }


    return (
        <div>
            <h2>Payment</h2>
            <StripeCheckout
                token={onToken}
                name="Printed T-Shirt"
                description='US Polo - Medium'
                image="https://placehold.jp/150x150.png"
                currency="INR"
                amount="120000"
                panelLabel='Make Payment'
                stripeKey="pk_test_51NwN46SGSe6lG6bP83Rmf9aDMMwLbBRj4acZBi8TEAmneEox9pW5vKXTUMMY8y6X9uo6DKasYylIv4v6s9QD2K8l00kalH5AX2"
            />
        </div>
    )
}
