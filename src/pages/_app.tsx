import '../global.css';
import type { AppProps } from 'next/app';
import LangProvider from 'providers/LangProvider';

export default function App({Component, pageProps}: AppProps) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}
