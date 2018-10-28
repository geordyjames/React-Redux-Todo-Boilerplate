import MyLoadable from '../components/MyLoadable';

export const HomePage = MyLoadable({
  loader: () => import('../components/HomePage')
});

export const LoginPage = MyLoadable({
  loader: () => import('../components/LoginPage')
});

export const NotFoundPage = MyLoadable({
  loader: () => import('../components/NotFoundPage')
});