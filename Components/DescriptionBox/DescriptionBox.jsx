import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Ecommerce is when individuals and companies buy or sell goods and services over the internet. Ecommerce can happen through a website, smartphone app, social media platform, online marketplace, or other sales platform.Common examples of ecommerce include online shopping, electronic payments, online auctions, and internet banking. You can participate in ecommerce anywhere with an internet connection. The goal of ecommerce for a seller is to drive sales using digital platforms and marketing strategies.</p>
            <p>Ecommerce is also known as e-commerce or electronic commerce, and is often used to refer to the wide range of tasks involved in selling online, from running digital ads to transferring payment data over a network.</p>
        </div>
    </div>
  )
}

export default DescriptionBox