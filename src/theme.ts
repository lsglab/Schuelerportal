import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
};

export default extendTheme({ config });
