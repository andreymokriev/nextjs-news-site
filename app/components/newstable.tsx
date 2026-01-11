'use client'

import { useState } from 'react';
import SearchBar from './search';
import AddBar from './addbar';
import NewsTable from './table';

export default function NewsSearchTable( {source} : {source: any} ) {
    const [filterText, setFilterText] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [SortDate, setSortDate] = useState(false);

    const [newContent, setNewContent] = useState('');
    const [newHeader, setnewHeader] = useState('');
    const [newImage, setnewImage] = useState('');
    const [newDate, setnewDate] = useState('');
  
    return (
      <div>
        <SearchBar 
          filterText={filterText}
          onFilterTextChange={setFilterText}
          filterDate={filterDate}
          onFilterDateChange={setFilterDate} 
          onSortChecked={setSortDate}
          SortDate={SortDate} />
        <AddBar
        newContent={newContent}
        newHeader={newHeader}
        newImage={newImage}
        newDate={newDate}
        setContent={setNewContent}
        setHeader={setnewHeader}
        setImage={setnewImage}
        setDate={setnewDate}
        />
        <NewsTable 
          source={source} 
          filterText={filterText}
          filterDate={filterDate} 
          sortDate={SortDate}/>
      </div>
    );
  }