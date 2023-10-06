import { useEffect, useState } from "react";
import PlayerProfile from "../../components/PlayerProfile/PlayerProfile";
import "../EditPlayer/EditPlayer.scss";
import { playerTypeResponse } from "../../types/types";
import { useParams, useNavigate } from "react-router-dom";

const EditPlayer = () => {
  const [player, setPlayer] = useState<playerTypeResponse | undefined>(
    undefined
  );
  // const [showForm, setShowForm] = useState(false);

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

  // const getPlayerForm = (player: playerTypeResponse) => {
  //   return{
  //     player_id: player.player_id,
  //     first_name: player.first_name,
  //     last_name: player.last_name,
  //     pitch_position: player.pitch_position,
  //     jersey_number: player.jersey_number,
  //     player_image_url: player.player_image_url,
  //     nationality: player.nationality,
  //     club_id: player.club_id
  //   }
  // }

  // const handleEditPlayerForm = () => {
  //   setShowForm(!showForm);
  // };

  useEffect(() => {
    getPlayersById(Number(id));
  }, []);

  // const playerDefaults: playerTypeRequest | undefined = player ? getPlayerForm(player) : undefined;

  if (!player) return null;

  return (
    <div>
      <PlayerProfile player={player} />
      <div className="edit-player__buttons">
        <button className="edit-player__button--delete" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="edit-player__button--update"
          // onClick={handleEditPlayerForm}
        >
          Update
        </button>
      </div>
      {/* {showForm &&} */}
    </div>
  );
};

export default EditPlayer;
