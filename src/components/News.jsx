import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ simplified }) => {
	const { data: cryptoNews } = useGetNewsQuery({
		newsCategory: 'Sport',
		count: simplified ? 10 : 100,
	});
	console.log(cryptoNews);
	return <div>News....</div>;
};
export default News;
