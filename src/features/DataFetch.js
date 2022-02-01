// import { useDispatch } from 'react-redux'
// import { login } from './campaigns'

// export const dataFetch = () => {
//     // const dispatch = useDispatch();

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }
import { setCampaigns } from "./campaigns"
import { useDispatch } from "react-redux"

// const dispatch = useDispatch();
const fetchData = async () => {

    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .catch(err => console.log(err))
}

export default fetchData

const presetDates = [
    {
        startDate: '5/5/2015',
        endDate: '1/1/2016',
        budget: 5161
    },
    {
        startDate: '25/12/2021',
        endDate: '6/5/2023',
        budget: 5161
    },
    {
        startDate: '4/8/20',
        endDate: '14/6/2019',
        budget: 5161
    },
    {
        startDate: '4/9/2022',
        endDate: '21/2/2023',
        budget: 5161
    },
    {
        startDate: '6/9/2010',
        endDate: '27/6/2012',
        budget: 5161
    },
    {
        startDate: '8/3/2021',
        endDate: '16/9/2023',
        budget: 5161
    },
    {
        startDate: '1/1/2018',
        endDate: '1/1/2026',
        budget: 5161
    },
    {
        startDate: '23/2/2003',
        endDate: '23/3/2003',
        budget: 524
    },
    {
        startDate: '5/5/2021',
        endDate: '31/1/2022',
        budget: 5161
    },
    {
        startDate: '1/12/2015',
        endDate: '1/12/2017',
        budget: 5161
    }
]