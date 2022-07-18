export enum AppRoute {
  Root = '/',
  Login = '/login',
  Films = '/films/:id',
  AddReview = '/films/:id/review',
  Favorites = '/favorites',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum RequestsStatus {
  Idle = 'idle',
  Success = 'success',
  Loading = 'loading',
  Failed = 'failed',
}

export enum FilmsGenres {
  AllGenres = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}
