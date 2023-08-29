import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.png"></link>
        <meta content='test' name='description'/>
        {/* Other meta tags, title, styles, etc. */}
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;


