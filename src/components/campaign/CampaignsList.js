import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { setCampaigns, isPending, gotError} from "../../features/campaignSlice";
import Search from "./search/Search";
import '../../styles/campaignList.scss';
import AddCampaign from "./addCampaign/AddCampaign";
import { modifyResponse } from "../../features/modifyResponse";
import Error from "../error/Error";
import Campaign from "./Campaign";

const CampaignsList = () => {
    const dispatch = useDispatch();
    const campaigns = useSelector((state) => state.campaigns);
    const search = useSelector((state)=>state.search);
    const timeStmp = new Date();
    const todaysTimeStmp = Date.parse(`${timeStmp.getFullYear()}-${timeStmp.getMonth() + 1}-${timeStmp.getDate()}`) / 1000;

    useEffect(()=> {
         fetchData();
    }, [])

    const fetchData = async () => {
        dispatch(isPending());
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .catch(err => dispatch(gotError(err)));
        dispatch(setCampaigns(modifyResponse(response)));
    }

// Thunk fetch function.
// Doesn't work, not sure why. Store created with @reduxjs/toolkit which comes with default thunk middleware. https://redux-toolkit.js.org/api/getDefaultMiddleware
// Have tried to import and chain .concat() thunk just like logger - did not work. Would highly appreciate a comment on this.
    // function fetchData() {
    //     return async (dispatch) => {
    //         dispatch(isPending());
            
    //         let response;
    //         try {
    //             response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         } catch (error){
    //             dispatch(gotError(error))

    //             return
    //         }

    //     dispatch(setCampaigns(modifyResponse(response)));
    //     }
    // }

    const filteredCampaigns = campaigns.value.filter(camp => {
        let count = 0;
        for(let filter in search.value) {
            if (search.value[filter]) {
                switch (filter) {
                    case 'startDate':
                        search.value.startDate <= (Date.parse(camp.startDate) / 1000) ? count++ : count--
                        break;

                    case 'endDate':
                        search.value.endDate >= (Date.parse(camp.endDate) / 1000) ? count++ : count--
                        break;

                    case 'nameFilter':
                        camp.name.toLowerCase().includes(search.value.nameFilter.toLowerCase()) ? count++ : count--
                        break;

                    default:
                        break;
                }
            } else { 
                count++
            }

        if(count === 3) return camp
        }
    })

    return(
        <div>
            {campaigns.error 
                ? <Error /> 
                :<>
                    <Search />
                    <div className="grid-temp">
                        <p>Name</p>
                        <p>User Name</p>
                        <p>Start Date</p>
                        <p>End Date</p>
                        <p>Status</p>
                        <p>Budget</p>
                    </div>
                    {campaigns.isPending ? <h1>Loading</h1> : filteredCampaigns.map((campaign, i) =>(
                        <Campaign key={i} campaign={campaign} todaysTimeStmp={todaysTimeStmp} />
                    ))}
                    <AddCampaign />
                </>
            }
        </div>
    )
}

export default CampaignsList