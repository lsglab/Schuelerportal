import { Button, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import NextLink from 'next/Link';

export default function Navbar(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();
	const isLight = colorMode === 'light';
	const ColorModeIcon = isLight ? MoonIcon : SunIcon;
	const [display, changeDisplay] = useState('none');
	return (
		<Flex>
			<Flex>
				<Flex pos='fixed' top='1rem' right='1rem' align='center'>
					<Flex display={['none', 'none', 'flex', 'flex']}>
						<NextLink href='/' passHref>
							<Button as='a' variant='ghost' aria-label='Home' my={5} w='100%'>
								Home
							</Button>
						</NextLink>

						<NextLink href='/about' passHref>
							<Button as='a' variant='ghost' aria-label='About' my={5} w='100%'>
								About
							</Button>
						</NextLink>

						<NextLink href='/contact' passHref>
							<Button as='a' variant='ghost' aria-label='Contact' mr={2} my={5} w='100%'>
								Contact
							</Button>
						</NextLink>
					</Flex>

					<IconButton
						aria-label='Open Menu'
						size='lg'
						mr={2}
						icon={<HamburgerIcon />}
						display={['flex', 'flex', 'none', 'none']}
						onCLick={() => changeDisplay('flex')}
					/>

					<IconButton
						aria-label={`Toggle ${isLight ? 'dark' : 'light'} mode`}
						icon={<ColorModeIcon />}
						isRound
						size='lg'
						onClick={toggleColorMode}
					/>
				</Flex>

				<Flex
					w='100vw'
					bgColor='black'
					// useColorMode() === "light" ? bgColor="red.50" : bgColor="green.50"
					zIndex={20}
					h='100vh'
					pos='fixed'
					top='0'
					left='0'
					overflowY='auto'
					flexDir='column'
					display={display}>
					<Flex justify='flex-end'>
						<IconButton
							mt={2}
							mr={2}
							aria-label='Close Menu'
							size='lg'
							icon={<CloseIcon />}
							onCLick={() => changeDisplay('none')}
						/>
					</Flex>
					<Flex flexDir='column' align='center'>
						<NextLink href='/' passHref>
							<Button as='a' variant='ghost' color='white' aria-label='Home' my={5} w='100%'>
								Home
							</Button>
						</NextLink>

						<NextLink href='/about' passHref>
							<Button as='a' variant='ghost' color='white' aria-label='About' my={5} w='100%'>
								About
							</Button>
						</NextLink>

						<NextLink href='/contact' passHref>
							<Button as='a' variant='ghost' color='white' aria-label='Contact' my={5} w='100%'>
								Contact
							</Button>
						</NextLink>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
