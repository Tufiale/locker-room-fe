import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.scss";
import { playerTypeRequest } from "../../types/types";

type FormProps = {
  defaultFormState: playerTypeRequest;
  formTitle: string;
  handleSubmit: (player: playerTypeRequest) => Promise<void>;
};

const Form = ({ defaultFormState, handleSubmit, formTitle }: FormProps) => {
  const [player, setPlayer] = useState<playerTypeRequest>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (Object.values(player).some((value) => !value)) {
    //   alert("Missing content, unable to proceed");
    //   return;
    // }

    handleSubmit(player);
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => setPlayer({ ...player, [key]: event.currentTarget.value });

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <label htmlFor="first_name">First Name: </label>
        <input
          id="playerFirstName"
          className="form-container__input"
          type="text"
          placeholder="First Name"
          value={player.first_name}
          onInput={(event) => handleInput(event, "first_name")}
        />
        <label htmlFor="last_name">Last Name: </label>
        <input
          id="last_name"
          className="form-container__input"
          type="text"
          placeholder="Last Name"
          value={player.last_name}
          onInput={(event) => handleInput(event, "last_name")}
        />
        <label htmlFor="pitch_position">Position: </label>
        <input
          id="pitch_position"
          className="form-container__input"
          type="text"
          placeholder="Goalkeeper, Defender, Midfielder or Forward"
          value={player.pitch_position}
          onInput={(event) => handleInput(event, "pitch_position")}
        />
        <label htmlFor="jersey_number">Squad Number: </label>
        <input
          id="jersey_number"
          className="form-container__input"
          type="text"
          placeholder="Squad Number"
          value={player.jersey_number}
          onInput={(event) => handleInput(event, "jersey_number")}
        />
        <label htmlFor="player_image_url">Image : </label>
        <input
          id="player_image_url"
          className="form-container__input"
          type="text"
          placeholder="Smile for the camera...!"
          value={player.player_image_url}
          onInput={(event) => handleInput(event, "player_image_url")}
        />
        <label htmlFor="nationality">Nationality: </label>
        <input
          id="nationality"
          className="form-container__input"
          type="text"
          placeholder="Nationality"
          value={player.nationality}
          onInput={(event) => handleInput(event, "nationality")}
        />
        <label htmlFor="club_id">Club Position: </label>
        <input
          id="club_id"
          className="form-container__input"
          type="text"
          placeholder="League Position"
          value={player.club_id}
          onInput={(event) => handleInput(event, "club_id")}
        />

        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
