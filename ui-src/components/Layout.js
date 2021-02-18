import Header from './Header';
import Meta from './Meta';

import layoutStyles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={layoutStyles.layout}>
        <Header />
        <main >
          { children }
        </main>
      </div>
    </>
  )
}

export default Layout;
