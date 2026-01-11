import Image from 'next/image';
import Link from 'next/link';

function sortNews(news: any) {
  return news.sort((a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}

export default function NewsTable({ source, filterText, filterDate, sortDate } : {
  source: any,
  filterText: string,
  filterDate: string,
  sortDate: any
}) {
    const rows: any = [];
    // console.log('Source in NewsTable:', source);
    if (!source) {
      return <div>База полетела к чертям</div>;
    }

    const sortedSource = sortNews(source);
    
    if (sortDate) {sortedSource.reverse()}
    sortedSource.forEach((news: any) => {
      if (
        news.header.toLowerCase().indexOf(filterText.toLowerCase()) === -1
      ) {
        return;
      }
      if (
        news.date.toLowerCase().indexOf(filterDate.toLowerCase()) === -1
      ) {
        return;
      }
      rows.push(
        <TableRow 
          news={news}
          key={`${news.id}`} />
      );
    });    
  
    return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Заголовок</th>
            <th scope="col" className="px-6 py-3">Содержимое</th>
            <th scope="col" className="px-6 py-3">Картинка</th>
            <th scope="col" className="px-6 py-3">Дата</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  function TableRow({ news} : {news: any}) {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-large text-gray-900 whitespace-nowrap dark:text-white"><Link href={`/news/${encodeURIComponent(news.id)}`}>{news.header}</Link></th>
        <td className="px-6 py-4">{news.content}</td>
        <td className="px-6 py-4">
          <Image
            loader={imageLoader}
            src={news.image}
            alt="Picture"
            width={100}
            height={100}
          />
        </td>
        <td className="px-6 py-4">{news.date}</td>
      </tr>
    );
  }

  const imageLoader = ({ src } : {src: any}) => {
    return `/${src}.png`
  }