// pages/_app.js
import '../public/styles.css'; // Importação global do CSS

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}