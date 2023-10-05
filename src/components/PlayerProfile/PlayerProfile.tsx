import { useParams } from "react-router-dom";
import { playerTypeResponse } from "../../types/types";
import "../PlayerProfile/PlayerProfile.scss";

type PlayerProfileProps = {
  players: playerTypeResponse[] | null;
};

const PlayerProfile = ({ players }: PlayerProfileProps) => {
  const { id } = useParams();

  const player = players?.find((player) => player.player_id === Number(id));

  return (
    <div className="player-profile">
      <section className="player-profile__info">
        <h1 className="player-profile__name">
          {player?.first_name}
          {player?.last_name}
        </h1>
        <img
          className="player-profile__image"
          src={player?.player_image_url}
          alt={player?.first_name}
        />
        <h3 className="player-profile__positon">{player?.pitch_position}</h3>
        <h4 className="player-profile__nationality">
          Nationality: {player?.nationality}
        </h4>
        <h4 className="player-profile__club">Club: {player?.club.club_name}</h4>
        <h4 className="player-profile__shirt">
          Shirt: {player?.jersey_number}
        </h4>
        <h4 className="player-profile__manager">
          Manager: {player?.club.manager}
        </h4>
        <h4 className="player-profile__stadium">
          Stadium: {player?.club.stadium_name}
        </h4>
      </section>
    </div>
  );
};

export default PlayerProfile;
