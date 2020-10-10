import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => {
  return (
    <>
      <h1>NC Residential Architects + Designers</h1>
      <div className="architects-list">
        { props.architects.map((item, i) => (
          <div className="card" key={i}>
            <Link to={`/architect/${item.name}`} className="address">{item.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Landing;
