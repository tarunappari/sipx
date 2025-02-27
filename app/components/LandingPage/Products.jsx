import React from 'react'
import styled from 'styled-components';

const Products = () => {
    return (
        <ProductsContainer>
            <div className="top-container">
                <h2>Our Products</h2>
                <p>At Sipx, we are committed to delivering clean, refreshing, and safe drinking water in every bottle. Our products are designed to meet the highest standards of purity, sustainability, and convenience, ensuring a healthier lifestyle for everyone.</p>
            </div>
            <div className="bottom-container">
                <div className="card">

                </div>
                <div className="card">

                </div>
                <div className="card">

                </div>
            </div>
        </ProductsContainer>
    )
}

export default Products;


const ProductsContainer = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 30% 70%;
    background-color: #e6f6fd;
    .top-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2{
            font-size: 3rem;
        }
        p{
            text-align: center;
            font-size: 1.3rem;
            padding: 0 8rem;
        }
    }
    .bottom-container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        .card{
            height:28rem;
            width:20rem;
            border: 1px solid red;
        }
    }
`