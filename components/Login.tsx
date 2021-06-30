import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import ZustandDemo from '$components/ZustandDemo';

export default function Login(): JSX.Element {
	const background = useColorModeValue('gray.100', 'gray.700');

	return (
		<Flex direction='column' background={background} p={12} rounded={6}>
			<Heading mb={6}>LSG Schüler-Portal 🏫</Heading>
			<ZustandDemo />
		</Flex>
	);
}
