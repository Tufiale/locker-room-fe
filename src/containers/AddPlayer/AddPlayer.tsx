import Form from "../../components/Form/Form";
import { playerTypeRequest } from "../../types/types";
import { getPlayerRequest } from "../../utils/players";
import "../AddPlayer/AddPlayer.scss";
import { useNavigate } from "react-router-dom";

const AddPlayer = () => {
  const navigate = useNavigate();

  const handleSubmit = async (newPlayer: playerTypeRequest): Promise<void> => {
    const result = await fetch("http://localhost:8080/player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: getPlayerRequest(newPlayer),
    });

    if (result.ok) {
      alert("Player added");
      //   const player = await result.json();
      navigate("/players");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    player_id: 1,
    first_name: "",
    last_name: "",
    pitch_position: "",
    jersey_number: 1,
    player_image_url: "",
    nationality: "",
    club_id: 1,
  };

  return (
    <section className="add-player">
      <h2 className="add-player__title">Add Your Own Player</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Become a player here..."
      />
    </section>
  );
};

export default AddPlayer;
