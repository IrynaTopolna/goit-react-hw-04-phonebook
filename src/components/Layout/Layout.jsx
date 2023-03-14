import { LayoutContainer } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <main>{children}</main>
    </LayoutContainer>
  );
};

export default Layout;
