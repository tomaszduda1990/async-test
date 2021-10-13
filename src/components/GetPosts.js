import useHttp from '../hooks/use-http';
const GetPosts = () => {
	const data = useHttp('https://jsonplaceholder.typicode.com/posts');
	return (
		<div>
			<ul>
				{data.length > 0 &&
					data.map((item) => <li key={item.id}>{item.body}</li>)}
			</ul>
		</div>
	);
};

export default GetPosts;
