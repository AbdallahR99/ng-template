export enum APP_ROUTES {
  // root
  HOME = '/',

  // account
  LOGIN = '/login',
  REGISTER = '/register',
  REGISTER_CONFIRM = '/register-confirm',

  FORGET_PASSWORD = '/forget-password',
  FORGET_PASSWORD_CONFIRM = '/forget-password-confirm',
  RESET_PASSWORD = '/reset-password',

  // user
  PROFILE = '/profile',
  PROFILE_EDIT = '/profile/edit',
  PROFILE_CHANGE_PASSWORD = '/profile/change-password',

  // blog
  BLOGS = '/blogs',
  BLOG_DETAIL = `/blogs/:id`,

  // common
  ABOUT = '/about',
  CONTACT = '/contact',
  NOT_FOUND = '/not-found',
  ERROR = '/error',
}
