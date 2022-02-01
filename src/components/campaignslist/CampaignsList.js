import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { setCampaigns } from "../../features/campaigns";
import Campaign from "./Campaign";
import fetchData from "../../features/DataFetch";
import Search from "./Search";
import '../../styles/campaignList.scss';
import AddCampaign from "./AddCampaign";


const CampaignsList = () => {
    const dispatch = useDispatch();
    const campaigns = useSelector((state) => state.campaigns);

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .catch(err => console.log(err));
            console.log(response)
        dispatch(setCampaigns(response))
    }

    console.log(campaigns)
    return(
        <div>
            <Search />
            <div className="grid-temp">
                <p>Name</p>
                <p>User Name</p>
                <p>Start Date</p>
                <p>End Date</p>
                <p>Active</p>
                <p>Budget</p>
            </div>
            {campaigns && campaigns.value && campaigns.value.map(campaign =>(
                <div className="grid-temp">
                    <p>{`Campaign ${campaign.id}`}</p>
                    {/* <p>{campaign.name}</p> */}
                </div>        ) )}
            <AddCampaign />

        </div>
    )
}

export default CampaignsList