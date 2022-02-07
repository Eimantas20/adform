import '../../styles/campaign.scss';
import moment from 'moment';

const Campaign = ({ campaign, todaysMoment }) => {
    let status = '';
    const currency = 'USD';
    const campaignString = 'Campaign';

    if (moment(campaign.startDate).isSameOrBefore(todaysMoment, 'day') && (moment(campaign.endDate).isSameOrAfter(todaysMoment, 'day'))) {
        status = 'active';
    }else {
        status = 'inactive'
    }
 
    return(
        <div className="grid-temp">
            <p>{campaignString} {campaign.id}</p>
            <p>{campaign.name}</p>
            <p>{campaign.startDate}</p>
            <p>{campaign.endDate}</p>
            <p className={status}>{status}</p>
            <p>{campaign.budget} {currency}</p>
        </div> 
    )
}

export default Campaign