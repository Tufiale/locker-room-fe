import { Link } from "react-router-dom";
import { playerTypeResponse } from "../../types/types";
import PlayerCard from "../PlayerCard/PlayerCard";
import "../PlayerCardList/PlayerCardList.scss";

type PlayerCardListProps = {
  players: playerTypeResponse[];
};

const PlayerCardList = ({ players }: PlayerCardListProps) => {
  return (
    <>
      <section className="player-container">
        {players.map((player) => (
          <Link key={player.player_id} to={`/players/${player.player_id}`}>
            <PlayerCard
              firstName={player.first_name}
              lastName={player.last_name}
              clubName={player.club.club_name}
              position={player.pitch_position}
              jerseyNumber={player.jersey_number}
              nationality={player.nationality}
              playerImageUrl={player.player_image_url}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default PlayerCardList;
