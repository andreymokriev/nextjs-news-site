import Divider from "./divider";

export default function SearchBar({ filterText, onFilterTextChange, filterDate, onFilterDateChange, onSortChecked, SortDate } : {
  filterText: string,
  onFilterTextChange: any,
  filterDate: string,
  onFilterDateChange: any,
  onSortChecked: any,
  SortDate: any
}) {
    return (
      <div>
        <form>
          <input 
            type='text'
            value={filterText} placeholder='Поиск по заголовку'
            onChange={(e) => onFilterTextChange(e.target.value)} />
          <input 
            type='text'
            value={filterDate} placeholder='Поиск по дате'
            onChange={(e) => onFilterDateChange(e.target.value)} />
          Сначала старые
          <input 
            type="checkbox"
            checked={SortDate}
            onChange={() => onSortChecked(!SortDate)}/>
        </form>
        <Divider />
      </div>
    );
  }
  