import '../../styles/campaign.scss';

const Campaign = ({ campaign, todaysTimeStmp }) => {
    let status = '';
    const currency = 'USD'

    if (((Date.parse(campaign.startDate) / 1000) <= todaysTimeStmp) && (todaysTimeStmp <= (Date.parse(campaign.endDate) / 1000))) {
        status = 'active';
    } else {
        status = 'inactive'
    }
 
    return(
        <div className="grid-temp">
            <p>{`Campaign ${campaign.id}`}</p>
            <p>{campaign.name}</p>
            <p>{campaign.startDate}</p>
            <p>{campaign.endDate}</p>
            <p className={status}>{status}</p>
            <p>{`${campaign.budget} ${currency}`}</p>
        </div> 
    )
}

export default Campaign