import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import theme from '$src/theme';

export default class Document extends NextDocument {
	render(): JSX.Element {
		return (
			<Html lang='de'>
				<Head>
					<meta name='theme-color' content={theme.colors.current} />
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
