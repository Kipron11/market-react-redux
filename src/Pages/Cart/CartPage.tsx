import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import CartCard from '../../components/CartCard/CartCard';
import Button from '../../components/Button/Button';

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const navigate = useNavigate();
  const total = cart
    .map(({ price, count }) => parseInt(price, 10) * count)
    .reduce((a, b) => a + b, 0)
    .toFixed(3);

  return (
    <div className="page">
      <div className="container">
        <div className="box">
          <h1>Your Cart</h1>
        </div>
        <div className="box">
          {cart.map(({
            id, imgSrc, price, title, count,
          }) => (
            <CartCard
              key={id}
              id={id}
              title={title}
              price={price}
              imgSrc={imgSrc}
              count={count}
            />
          ))}
        </div>
        <div className="box">
          <h2 className="page__sub-title">
            {`Total: ${total}€`}
          </h2>
        </div>
      </div>

      <div className="box">
        <Button title="Purchase" />
        <Button onClick={() => navigate('/')} title="Back to Store" />
      </div>
    </div>
  );
};

export default CartPage;
