import { useEffect, useState } from "react";
import PlayerProfile from "../../components/PlayerProfile/PlayerProfile";
import "../EditPlayer/EditPlayer.scss";
import { playerTypeResponse } from "../../types/types";
import { useParams, useNavigate } from "react-router-dom";

const EditPlayer = () => {
  const [player, setPlayer] = useState<playerTypeResponse | undefined>(
    undefined
  );

  const { id } = useParams();
  const navigate = useNavigate();

  const getPlayersById = async (id: number) => {
    let url = `http://localhost:8080/players/${id}`;
    const res = await fetch(url);
    const playersData = await res.json();
    setPlayer(playersData);
  };

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8080/players/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      alert("Player deleted...He must have been really bad");
      navigate("/");
    } else {
      const alertMessage = await res.text();
      alert(alertMessage);
    }
  };

  useEffect(() => {
    getPlayersById(Number(id));
  }, []);

  if (!player) return null;

  return (
    <div>
      <PlayerProfile player={player} />
      <div className="edit-player__buttons">
        <button className="edit-player__button--delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="edit-player__button--update">Update</button>
      </div>
    </div>
  );
};

export default EditPlayer;
