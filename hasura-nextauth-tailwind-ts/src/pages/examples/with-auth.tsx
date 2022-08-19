import { useSession } from 'next-auth/react';
import { AppProps } from 'next/app';

const WithAuthExample: AppProps['Component'] = () => {
  const { data: session } = useSession({ required: true });

  return <div>Home Page</div>;
};
WithAuthExample.isAuth = true;
WithAuthExample.requiredRoles = ['admin'];
export default WithAuthExample;
