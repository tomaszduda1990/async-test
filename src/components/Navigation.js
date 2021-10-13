import NavItem from './NavItem';
const Navigation = () => {
	const navigation = [
		{
			url: '/',
			text: 'home',
		},
		{
			url: '/posts',
			text: 'posts',
		},
		{
			url: '/add-post',
			text: 'add post',
		},
	];
	return (
		<nav>
			<ul>
				{navigation.map((nav) => (
					<NavItem key={nav.text} url={nav.url} text={nav.text} />
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
