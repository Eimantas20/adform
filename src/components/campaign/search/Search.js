import { useState } from "react"
import '../../../styles/search.scss';
import { useDispatch, useSelector } from "react-redux";
import{setSearch} from '../../../features/searchSlice'

const Search = () => {
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ name, setName ] = useState('');
    const dispatch = useDispatch();
    const searchState = useSelector(state => state.search)

    const handleChange = (e, filterType) => {
        let searchFilters = { ...searchState.value };
        switch (filterType) {
            case 'startDate':
            case 'endDate':
                let selectedDate = e.target.value ? Date.parse(e.target.value) / 1000 : 0;
                searchFilters[filterType] = selectedDate;
                break;
            case 'nameFilter':
                searchFilters.nameFilter = e.target.value;
                break;
            default:
                break;
        }
        dispatch(setSearch(searchFilters))
    }

    const searchSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={searchSubmit} className="search-container">
                <div>
                    <input type='date' required placeholder='Start date' value={startDate} max={endDate} onChange={(e) => { setStartDate(e.target.value); handleChange(e, 'startDate') }}/>
                    <input type='date' required placeholder='End date' value={endDate} min={startDate} onChange={(e) => {setEndDate(e.target.value); handleChange(e, 'endDate')}}/>
                </div>
                <div>
                    <input type='text' placeholder='Search by name' value={name} onChange={(e) => { setName(e.target.value); handleChange(e, 'nameFilter') }} />
                </div>
            </form>
        </>
    )
}

export default Search