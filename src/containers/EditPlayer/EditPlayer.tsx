// import { playerTypeResponse } from "../../types/types";
import { useEffect, useState } from "react";
import PlayerProfile from "../../components/PlayerProfile/PlayerProfile";
import "../EditPlayer/EditPlayer.scss";
import { playerTypeResponse } from "../../types/types";
import { useParams } from "react-router-dom";

// type EditPlayerProps = {
//   players: playerTypeResponse[];
// };

const EditPlayer = () => {
  const [players, setPlayers] = useState<playerTypeResponse[] | null>(null);
  const { id } = useParams();

  const getPlayersById = async (id: number) => {
    let url = `http://localhost:8080/players/${id}`;
    const res = await fetch(url);
    const playersData = await res.json();
    setPlayers(playersData);
  };

  useEffect(() => {
    getPlayersById(Number(id));
  }, []);

  return (
    <>
      <PlayerProfile players={players} />
    </>
  );
};

export default EditPlayer;
