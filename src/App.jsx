import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';
import {
	Navbar,
	Exchanges,
	HomePage,
	News,
	CryptoDetails,
	Cryptocurrencies,
} from './components';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app">
			<nav className="navbar">
				<Navbar />
			</nav>
			<main className="main" >
				<Layout>
					<div className="routes">
						<Switch>
							<Route exact path="/">
								<HomePage />
							</Route>
							<Route exact path="/exchanges">
								<Exchanges />
							</Route>
							<Route exact path="/cryptocurrencies">
								<Cryptocurrencies />
							</Route>
							<Route exact path="/crypto/:coinId">
								<CryptoDetails />
							</Route>
							<Route exact path="/news">
								<News />
							</Route>
						</Switch>
					</div>
				</Layout>

				<footer className="footer">
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}
					>
						Cryptoverse <br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</footer>
			</main>
		</div>
	);
}

export default App;
