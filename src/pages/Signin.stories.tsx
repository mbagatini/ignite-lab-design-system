import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { Signin } from './Signin';

export default {
	title: 'Pages/Signin',
	component: Signin,
	args: {},
	parameters: {
		msw: {
			handlers: [
				rest.post('/sessions', (req, res, ctx) => {
					return res(ctx.json({ message: 'User successfully logged in' }));
				}),
			]
		},
	}
} as Meta;

// Must export at least one variant
export const Default: StoryObj = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		userEvent.type(canvas.getByLabelText('Endereço de e-mail'), 'maria@host.com');
		userEvent.type(canvas.getByLabelText('Sua senha'), 'teste123');

		userEvent.click(canvas.getByRole('button'));

		await waitFor(() => {
			return expect(canvas.getByText('Login efetuado')).toBeInTheDocument();
		});
	}
}
