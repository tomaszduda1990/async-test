import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import GetPosts from './components/GetPosts';
import AddPost from './components/AddPost';
import Navigation from './components/Navigation';
function App() {
	return (
		<main className='App' role='main'>
			<Router>
				<Navigation />
				<Switch>
					<Route path='/posts' exact component={GetPosts} />
					<Route path='/add-post' exact component={AddPost} />
					<Route path='/' component={Home} />
				</Switch>
			</Router>
		</main>
	);
}

export default App;
