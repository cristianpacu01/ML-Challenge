import Layout from '../components/Layout';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.scss'
import '../styles/shimmer.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
