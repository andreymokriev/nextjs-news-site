import NewsSearchTable from './components/newstable';
import { getAllNews } from './lib/data';

export default async function App() {
  const news = await getAllNews()
  return <NewsSearchTable source={news} />
}