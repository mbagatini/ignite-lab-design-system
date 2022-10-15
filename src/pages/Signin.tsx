import { FormEvent, useState } from 'react';
import { EnvelopeSimple, Lock } from 'phosphor-react';
import axios from 'axios';

import { Heading } from '../components/Heading';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Input } from '../components/Input';
import { Text } from '../components/Text';
import Logo from '../assets/logo.svg';

export function Signin() {
	const [isUserSingedIn, setIsUserSignedIn] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin(e: FormEvent) {
		e.preventDefault();

		axios.post('/sessions', {
			email,
			password,
		}).then(() => setIsUserSignedIn(true));
	}
	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center'>
			<img src={Logo} className='h-[120px]' />

			<Heading size='lg' className='mt-4'>
				Ignite Lab
			</Heading>


			<Text size='lg' className='text-gray-400 mt-1'>Faça login e comece a usar</Text>

			{isUserSingedIn && <Text>Login efetuado</Text>}

			<form onSubmit={handleLogin} className='flex flex-col mt-10 w-full max-w-sm'>
				<Text asChild size='sm' className='font-semibold mb-3'>
					<label htmlFor="email">Endereço de e-mail</label>
				</Text>
				<Input.Root>
					<Input.Icon><EnvelopeSimple /></Input.Icon>
					<Input.Input id='email' type='email' placeholder='john@email.com' onChange={(e) => setEmail(e.target.value)} />
				</Input.Root>

				<Text asChild size='sm' className='font-semibold mt-4 mb-3'>
					<label htmlFor="password">Sua senha</label>
				</Text>
				<Input.Root>
					<Input.Icon><Lock /></Input.Icon>
					<Input.Input id='password' type='password' placeholder='*****' onChange={(e) => setPassword(e.target.value)} />
				</Input.Root>

				<Text asChild size='sm' className='mt-4 flex items-center justify-center gap-2 text-gray-200'>
					<label htmlFor="remember">
						<Checkbox id='remember' />
						Lembrar de mim por 30 dias
					</label>
				</Text>

				<Button type='submit' className='mt-8'>Entrar na plataforma</Button>
			</form>

			<footer className='flex flex-col items-center gap-3 mt-8'>
				<a href="" className='underline text-gray-400 text-xs hover:text-gray-200'>Esqueceu sua senha?</a>
				<a href="" className='underline text-gray-400 text-xs hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
			</footer>
		</div>
	)
}