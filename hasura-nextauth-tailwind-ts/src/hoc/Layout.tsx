import { ReactElement } from 'react';

interface ILayoutProps {
  children: ReactElement;
}
const Layout = (props: ILayoutProps) => {
  return <div>{props.children}</div>;
};

export default Layout;
