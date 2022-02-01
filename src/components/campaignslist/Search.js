import { useState } from "react"
import '../../styles/search.scss';

const Search = () => {
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ name, setName ] = useState('');


    const searchSubmit = (e) => {
        e.preventDefault();
    }
    // console.log(name)
    return (
        <div>
            <form onSubmit={searchSubmit}>
                <div>
                    <input type='text' placeholder='Start date' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                    <input type='text' placeholder='End date' value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                </div>
                <div>
                    <input type='text' placeholder='Search by name' value={name} onChange={(e) => setName(e.target.value)} />
                    <button>Search</button>
                </div>
              
            </form>

        </div>
    )
}

export default Search