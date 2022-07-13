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
