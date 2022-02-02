import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { setCampaigns } from "../../features/campaignSlice";
import Campaign from "./Campaign";
import fetchData from "../../features/DataFetch";
import Search from "./Search";
import '../../styles/campaignList.scss';
import AddCampaign from "./AddCampaign";
import { modifyResponse } from "../../features/modifyResponse";
// import { customFilter } from "../../features/customFilter";
import {customFilter} from './Search'
import { testingapp } from "./Search";


const CampaignsList = () => {
    const dispatch = useDispatch();
    const campaigns = useSelector((state) => state.campaigns);
    const search = useSelector((state)=>state.search)
    console.log(search)
    // const test = useSelector(state=>state)
    // console.log(test)
    useEffect( async()=> {
        await fetchData();
    }, [])



    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .catch(err => console.log(err));
        dispatch(setCampaigns(modifyResponse(response)))
    }

    let timeStmp = new Date();
    let todaysDate = `${timeStmp.getFullYear()}-${timeStmp.getMonth() + 1}-${timeStmp.getDate()}`
    let todaysTimeStmp = Date.parse(todaysDate)/1000;

    const filteredCampaigns = campaigns.value.filter(camp => {
        return search.value <= (Date.parse(camp.endDate) / 1000)
    })

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
            {/* {campaigns && campaigns.value && campaigns.value.map(campaign => ( */}
            {campaigns && campaigns.value && filteredCampaigns.map(campaign =>(

                <div key={campaign.id} className="grid-temp">
                    <p>{`Campaign ${campaign.id}`}</p>
                    <p>{campaign.name}</p>
                    <p>{campaign.startDate}</p>
                    <p>{campaign.endDate}</p>
                    <p className={((Date.parse(campaign.startDate)/1000) <= todaysTimeStmp) && (todaysTimeStmp <= (Date.parse(campaign.endDate)/1000)) ? 'true' : 'false'}>status</p>
                    <p>{campaign.budget}</p>
                </div>))}
            <AddCampaign />

        </div>
    )
}

export default CampaignsList