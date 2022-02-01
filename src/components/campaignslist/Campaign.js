import '../../styles/campaign.scss';

const Campaign = (props) => {
    const { campaign } = props;
    return(
        <div className="campaign-container">
            <p>{`Campaign ${campaign.id}`}</p>
            <p>{campaign.name}</p>
        </div>
    )
}

export default Campaign