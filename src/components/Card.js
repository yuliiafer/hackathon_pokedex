import React from "react";
import Types from "./Types";

function Card({ pokemon }) {
  return (
    <div className="Card__pokemon">
      <div className="Card__id">{pokemon.id}</div>
      <div className="Card__img">
        <div className="circle"></div>
        <img
          className="Card__image"
          src={pokemon.sprites.front_default}
          alt="{pokemon.name}"
        />
      </div>
      <div className="Card__name">{pokemon.name}</div>
      <div className="Card__types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="Card__type"
              style={{ backgroundColor: Types[type.type.name] }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card__info">
        <div className="Card__data Card__data--weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data Card__data--weight">
          <p className="title">Height</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="Card__data Card__data--ability">
          <p className="title">Ability</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
