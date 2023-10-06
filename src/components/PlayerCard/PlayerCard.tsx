import "../PlayerCard/PlayerCard.scss";

type playerCardProps = {
  firstName: string;
  lastName: string;
  clubName: string;
  position: string;
  jerseyNumber: number;
  playerImageUrl: string;
  nationality: string;
};

const PlayerCard = ({
  firstName,
  lastName,
  clubName,
  position,
  jerseyNumber,
  nationality,
  playerImageUrl,
}: playerCardProps) => {
  return (
    <>
      <section className="player-card">
        <div className="player-card-container">
          <div className="player-card__heading">
            <img
              src={playerImageUrl}
              alt={`${firstName} ${lastName}`}
              className="player-card__image"
            />
            <h1 className="player-card_name">{`${firstName} ${lastName}`}</h1>
            <h3 className="player-card__clubName">{clubName}</h3>
          </div>
          <div className="player-card__main">
            <h4 className="player-card__position">Position: {position}</h4>
            <h4 className="player-card__nationality">
              Nationality: {nationality}
            </h4>
            <h4 className="player-card__jerseyNumber">
              Shirt Number: {jerseyNumber}
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayerCard;
