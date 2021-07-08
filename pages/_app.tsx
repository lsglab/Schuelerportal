import { ChakraProvider } from '@chakra-ui/react';
import { Provider, createStore } from '$src/store';
import Head from 'next/head';
import Navbar from '$components/Navbar';
import type { AppProps } from 'next/app';
import type { UseStore } from 'zustand';

function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>LSG Schüler-Portal</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			</Head>
			{/* eslint-disable-next-line @typescript-eslint/ban-types */}
			<Provider createStore={createStore as () => UseStore<object>}>
				<ChakraProvider>
					<Navbar />
					<Component {...pageProps} />
				</ChakraProvider>
			</Provider>
		</>
	);
}

export default App;
