export type Comment = {
  username: string;
  creation_date?: string;
  comment: string;
  item_id: string;
};

export type Episode = {
  id: string;
  name: string;
  url: string;
  airdate: string;
  season: string;
  image: {
    original: string;
    medium: string;
  };
  rating: {
    average: number;
  };
};

export type Like = {
  item_id: string;
  likes: number;
};
