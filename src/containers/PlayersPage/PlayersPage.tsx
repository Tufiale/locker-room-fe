import PlayerCardList from "../../components/PlayerCardList/PlayerCardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEvent, useEffect, useState } from "react";
import { playerTypeResponse } from "../../types/types";

const PlayersPage = () => {
  const [players, setPlayers] = useState<playerTypeResponse[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<playerTypeResponse[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const gettingPlayers = async () => {
    const url = "http://localhost:8080/players";
    const res = await fetch(url);
    const data: playerTypeResponse[] = await res.json();
    setPlayers(data);
    setFilteredPlayers(data);
  };

  useEffect(() => {
    gettingPlayers();
  }, []);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const inputToLower = event.currentTarget.value.toLowerCase();
    setSearchTerm(inputToLower);
    const filtered = players.filter(
      (player) =>
        player.first_name.toLowerCase().includes(inputToLower) ||
        player.last_name.toLowerCase().includes(inputToLower)
    );

    setFilteredPlayers(filtered);
  };

  return (
    <>
      <SearchBox
        key="SearchBox"
        label="Search Tickets Here:"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />

      <PlayerCardList players={filteredPlayers} />
    </>
  );
};

export default PlayersPage;
