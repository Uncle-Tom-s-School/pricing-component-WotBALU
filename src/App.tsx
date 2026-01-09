import React, { useEffect, useState } from 'react';
import PriceCard from './components/PriceCard';
import './App.css';

type Plan = {
  title: string;
  price: number;
  storage: string;
  features: string[];
  highlighted: boolean;
};

const App: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div className="container">
      <h1>Pricing Plans</h1>
      <div className="cards">
        {plans.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default App;
