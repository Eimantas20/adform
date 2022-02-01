import { useState } from "react"
import '../../styles/search.scss';
import { useDispatch, useSelector } from "react-redux";
import { setCampaigns } from "../../features/campaigns";
// import { customFilter } from "../../features/customFilter";

export const customFilter = (selectedDateTmst) => {
    // const propCamps = props.campaigns.value;
    // console.log(propCamps)
    // const campaignsToFilter = [...campaigns.value];
    const foo = {};
    let matchingSuggestionsIndexes = [];
    let matchedSuggestions = [];
    // propCamps.forEach(campaign => {
    //     if (((Date.parse(campaign.startDate) / 1000) <= selectedDateTmst) && (selectedDateTmst <= (Date.parse(campaign.endDate) / 1000))) {
    //         matchedSuggestions.push(campaign)
    //     } else {
    //         console.log('noooooooooooooo')
    //     }
    // })

    // propCamps.filter(campaign => {
    //     if (((Date.parse(campaign.startDate) / 1000) <= selectedDateTmst) && (selectedDateTmst <= (Date.parse(campaign.endDate) / 1000))) {
    //         return campaign
    //     } else {
    //         console.log('noooooooooooooo')
    //     }
    // })
    // return propCamps

    // console.log(selectedDateTmst)
    // return selectedDateTmst ? dispatch(setCampaigns(matchedSuggestions)) : dispatch(setCampaigns(campaigns))
}
export const testingapp = (campaigns, selectedDateTmst) => {
    // console.log(selectedDateTmst)
    // console.log(campaigns)
    if (selectedDateTmst) {
        let bybys = campaigns.value
        bybys.filter(campaign => {
            if (((Date.parse(campaign.startDate) / 1000) <= selectedDateTmst) && (selectedDateTmst <= (Date.parse(campaign.endDate) / 1000))) {
                return campaign
            } else {
                console.log('noooooooooooooo')
            }
        })
        console.log(bybys)
        return bybys
    } else {
        return campaigns
    }
}



const Search = (props) => {
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ name, setName ] = useState('');
    const dispatch = useDispatch();
    const campaigns = useSelector(state => state.campaignsFilter)

    const handleChange = (e) =>{
        let selectedDateTmst = e.target.value ? Date.parse(e.target.value) / 1000 : 0
        // customFilter(selectedDateTmst)
        testingapp(campaigns, selectedDateTmst )
    }

    // const customFilter = (selectedDateTmst) => {
    //     const propCamps = props.campaigns.value;
    //     // console.log(propCamps)
    //     // const campaignsToFilter = [...campaigns.value];
    //     const foo = {};
    //     let matchingSuggestionsIndexes = [];
    //     let matchedSuggestions = [];
    //     // propCamps.forEach(campaign => {
    //     //     if (((Date.parse(campaign.startDate) / 1000) <= selectedDateTmst) && (selectedDateTmst <= (Date.parse(campaign.endDate) / 1000))) {
    //     //         matchedSuggestions.push(campaign)
    //     //     } else {
    //     //         console.log('noooooooooooooo')
    //     //     }
    //     // })

    //     propCamps.filter(campaign => {
    //         if (((Date.parse(campaign.startDate) / 1000) <= selectedDateTmst) && (selectedDateTmst <= (Date.parse(campaign.endDate) / 1000))) {
    //             return campaign
    //         } else {
    //             console.log('noooooooooooooo')
    //         }
    //     })
    //     return propCamps

    //     // console.log(selectedDateTmst)
    //     // return selectedDateTmst ? dispatch(setCampaigns(matchedSuggestions)) : dispatch(setCampaigns(campaigns))
    // }

    const searchSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={searchSubmit}>
                <div>
                    <input type='date' placeholder='Start date' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                    <input type='date' placeholder='End date' value={endDate} onChange={(e) => {setEndDate(e.target.value); handleChange(e)}}/>
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