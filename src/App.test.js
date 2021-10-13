import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axiosMock from 'axios';
import GetPosts from './components/GetPosts';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';

describe('Main App component test', () => {
	beforeEach(cleanup);
	test('renders <App>', () => {
		render(<App />);
		const app = screen.getByRole(/main/i);
		expect(app).toBeInTheDocument();
	});

	test('renders <Navigation> with 3 links', () => {
		render(
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>
		);
		const nav = screen.getByRole('navigation');
		expect(nav).toBeInTheDocument();

		const links = screen.getAllByRole('link');
		expect(links).toHaveLength(3);
	});

	test('useHttp hook', async () => {
		// const getPostsLink = screen.getByRole('link', { name: /add post/i });
		// userEvent.click(getPostsLink);
		axiosMock.get.mockResolvedValueOnce({
			data: [
				{
					userId: 1,
					id: 2,
					title: 'qui est esse',
					body: 'this is testing body',
				},
			],
		});
		render(<GetPosts />);
		const postsList = await screen.findByRole('list');
		expect(postsList).toBeInTheDocument();
		const listElement = screen.getByRole('listitem');
		expect(listElement).toHaveTextContent('this is testing body');
		expect(axiosMock.get).toBeCalledTimes(1);
	});
});
