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

export type playerType = {
  player_id: number;
  club_id: number; // Foreign key referencing Premier League Clubs
  first_name: string;
  last_name: string;
  position: string;
  jersey_number: number;
  player_image_url: string;
};
