import { playerTypeRequest } from "../types/types";

export const getPlayerRequest = (playerReq: playerTypeRequest) => {
  const {
    player_id,
    first_name,
    last_name,
    pitch_position,
    jersey_number,
    player_image_url,
    nationality,
    club_id,
  } = playerReq;
  return JSON.stringify({
    player_id,
    first_name,
    last_name,
    pitch_position,
    jersey_number,
    player_image_url,
    nationality,
    club_id,
  });
};
