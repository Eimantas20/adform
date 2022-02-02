import { useState } from "react";
import '../../styles/addCampaign.scss';
import { useDispatch, useSelector } from "react-redux";
import { setCampaigns } from "../../features/campaignSlice";

const AddCampaign = () => {
    const dispatch = useDispatch();
    const campaigns = useSelector(state=>state.campaigns)

    const [ values, setValues ] = useState({});
    const [ errors, setErrors ] = useState({});
 

    const test= (e) => {
        e.preventDefault();

        let newCampArr = [...campaigns.value]
        newCampArr.push(values);

        dispatch(setCampaigns(newCampArr))
        setValues({});
    }

    const validate =(e, name, value) => {
        switch(name) {
            case 'id' :
                if(isNaN(value)) {
                    setErrors({
                        ...errors,
                        id: 'Please enter a number'
                    })
                } else {
                    delete errors['id'];
                    setErrors(errors)
                }
                break;
            case 'name':
                if(value.length < 3) {
                    setErrors({
                        ...errors,
                        name: 'Please enter full name'
                    })
                } else {
                    delete errors['name'];
                    setErrors(errors);
                }
                break;
            case 'startDate': 
                if (!value) {
                    setErrors({
                        ...errors,
                        startDate: 'Select valid start date'
                    })
                } else {
                    delete errors['startDate'];
                    setErrors(errors);
                }
                break;
            case 'endDate':
                if (!value) {
                    setErrors({
                        ...errors,
                        endDate: 'Select valid end date'
                    })
                } else {
                    let endDate = Date.parse(value)
                    let startDate = Date.parse(values.startDate);
                    if (endDate < startDate) {
                        return setErrors({
                            ...errors,
                            endDate: 'Cannot be earlier then start date'
                        })
                    }
                    delete errors['endDate'];
                    setErrors(errors);
                }
                break;
            case 'budget':
                if (isNaN(value)) {
                    setErrors({
                        ...errors,
                        budget: 'Please enter amout'
                    })
                } else {
                    delete errors['budget'];
                    setErrors(errors)
                }
                break;
            default: break;
        }
    }
    const handleChange = (e) => {
        e.preventDefault();

        let name = e.target.name;
        let value = e.target.value;

        validate(e, name, value)

        setValues({
            ...values,
            [name]: value
        })
    }

    return(
        <div className='add-campaign-cont'>
            <form noValidate onSubmit={test}>
                <div className='input-group'>
                    <input name='id' type='text' placeholder="Enter id" required onChange={handleChange} />
                    {errors.id && <p className='error-msg'>{errors.id}</p>}
                </div>
                <div>
                    <input name='name' type='text' placeholder="Enter name" required onChange={handleChange} />
                    {errors.name && <p className='error-msg'>{errors.name}</p>}
                </div>
                <div>
                    <input name='startDate' type='date' placeholder="Start date" required onChange={handleChange} />
                    {errors.startDate && <p className='error-msg'>{errors.startDate}</p>}
                </div>
                <div>
                    <input name='endDate' type='date' placeholder="End date" required onChange={handleChange} />
                    {errors.endDate && <p className='error-msg'>{errors.endDate}</p>}
                </div>
                <div>
                    <input name='budget' type='text' placeholder="Budget" required onChange={handleChange} />
                    {errors.budget && <p className='error-msg'>{errors.budget}</p>}
                </div>
                <button>Add Campaign</button>
            </form>
        </div>
    )
}

export default AddCampaign