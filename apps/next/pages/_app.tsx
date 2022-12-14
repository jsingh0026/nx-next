import { AppProps } from 'next/app';
import Head from 'next/head';
import { StoreContext } from '../components/Store';
import todo from '../components/Todo';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={todo}>
      <Head>
        <title>Welcome to next!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </StoreContext.Provider>
  );
}

export default CustomApp;
