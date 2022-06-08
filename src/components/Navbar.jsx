import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
	BulbOutlined,
	HomeOutlined,
	FundOutlined,
	MenuOutlined,
	MoneyCollectOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import Item from 'antd/lib/list/Item';
const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/">CryptoVerse</Link>
				</Typography.Title>
			</div>
			<Menu theme="dark">
				<Menu.Item icon={<HomeOutlined />}>
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item icon={<FundOutlined />}>
					<Link to="/cryptocurrencies">Cryptocurrencies</Link>
				</Menu.Item>
				<Menu.Item icon={<MoneyCollectOutlined />}>
					<Link to="/exchanges">Exchanges</Link>
				</Menu.Item>
				<Menu.Item icon={<HomeOutlined />}>
					<Link to="/news">News</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};
export default Navbar;
