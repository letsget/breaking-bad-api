import React from "react";
import { useSelector } from "react-redux";
import CharacterItem from "./CharacterItem";
import Spinner from '../UI/Spinner';

const CharacterGrid = () => {
  const data = useSelector(({ app: { characters } }) => characters);
  const isLoading = useSelector(({ app: { isLoading } }) => isLoading);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {data.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
