export type premierLeagueClubType = {
  club_id: number;
  club_name: string;
  city: string;
  stadium_name: string;
  founded_year: number;
  manager: string;
  website: string;
  logo_url: string;
};

export type playerTypeResponse = {
  player_id: number;
  first_name: string;
  last_name: string;
  pitch_position: string;
  jersey_number: number;
  player_image_url: string;
  nationality: string;
  club_id: number;
  club: {
    club_id: number;
    club_name: string;
    stadium_name: string;
    city: string;
    founded_year: number;
    manager: string;
    logo_url: string;
  };
};
