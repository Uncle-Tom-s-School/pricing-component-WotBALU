import React from 'react';
import './PriceCard.css';

type PriceCardProps = {
  title: string;
  price: number;
  storage: string;
  features: string[];
  highlighted: boolean;
};

const PriceCard: React.FC<PriceCardProps> = ({ title, price, storage, features, highlighted }) => {
  return (
    <div className={`card ${highlighted ? 'highlighted' : ''}`}>
      <h2>{title}</h2>
      <p className="price">${price}</p>
      <p>{storage} storage</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Try for Free</button>
    </div>
  );
};

export default PriceCard;
