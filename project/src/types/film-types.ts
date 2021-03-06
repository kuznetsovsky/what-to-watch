export type FilmType = {
  id: string;
  name: string;
  preview: string;
  videoSrc: string;
};

export type FilmsType = FilmType[];

export type SelectFilmId = string | null;
