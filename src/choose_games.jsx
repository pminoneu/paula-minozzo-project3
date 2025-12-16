import React from 'react';
import { Link } from 'react-router-dom';

export default function ChooseGames() {
  return (
    <>
      <div className="title bebas-neue-regular">
        <h2>Choose your game</h2>
      </div>
      <div className="button-standard">
        <Link to="/games/normal">Hard</Link>
      </div>
      <div className="button-standard">
        <Link to="/games/easy">Easy</Link>
      </div>
    </>
  );
}
