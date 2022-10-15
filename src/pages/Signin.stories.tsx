import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Signin } from './Signin';

export default {
	title: 'Pages/Signin',
	component: Signin,
	args: {}
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
