import { Center } from '@chakra-ui/react';
import Head from 'next/head';
import Login from '$components/Login';

export default function Index(): JSX.Element {
	return (
		<>
			<Head>
				<title>Schuelerportal | Login</title>
			</Head>
			<Center w='100vw' h='100vh'>
				<Login />
			</Center>
		</>
	);
}
