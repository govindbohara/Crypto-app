import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useEffect, useState } from 'react';
const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery();
	const [cryptos, setCryptos] = useState([]);
	const [searchTerm, setSearchTerms] = useState('');
	const [empty, setEmpty] = useState(false);
	useEffect(() => {
		const filteredCrypto = cryptosList?.data?.coins.filter(coin =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		filteredCrypto.length === 0 ? setEmpty(true) : empty;
		setCryptos(filteredCrypto);
		filteredCrypto.length !== 0 ? setEmpty(false) : empty;
	}, [searchTerm, cryptosList]);

	return (
		<>
			{!simplified && (
				<div className="search-crypto">
					<Input
						placeholder="Search Crypto"
						onChange={e => setSearchTerms(e.target.value)}
					/>
				</div>
			)}
			{empty && (
				<p style={{ textAlign: 'center', fontSize: 'large', fontWeight: 'bold' }}>
					No Crypto Found
				</p>
			)}
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos.map(currency => {
					return (
						<Col xs={24} lg={6} className="crypto-card" key={currency.uuid}>
							<Link to={`/crypto/${currency.uuid}`}>
								<Card
									title={`${currency.rank} .${currency.name}`}
									extra={
										<img src={currency.iconUrl} className="crypto-image" />
									}
									hoverable
								>
									<p>Price :{millify(currency.price)}</p>
									<p>Market Cap :{millify(currency.marketCap)}</p>
									<p>Daily Change :{millify(currency.change)}</p>
								</Card>
							</Link>
						</Col>
					);
				})}
			</Row>
		</>
	);
};
export default Cryptocurrencies;
