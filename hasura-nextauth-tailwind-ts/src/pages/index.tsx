import { useSession } from 'next-auth/react';
import { AppProps } from 'next/app';

const HomePage: AppProps['Component'] = () => {
  const { data: session } = useSession({ required: true });

  return <div>Home Page</div>;
};
HomePage.isAuth = true;
export default HomePage;
