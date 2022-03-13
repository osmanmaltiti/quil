import Layout from '../components/layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Head from 'next/head'
 

function MyApp({ Component, pageProps }) {
  return(
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&family=Righteous&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet"/>
      <Head>
        <title>Quil | Home</title>
      </Head>
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    </>
  ) 
}

export default MyApp
