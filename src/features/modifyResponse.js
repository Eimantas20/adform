const presetDates = [
    {
        startDate: '2015-05-05',
        endDate: '2016-01-01',
        budget: 8767
    },
    {
        startDate: '2021-12-25',
        endDate: '2023-05-06',
        budget: 25234
    },
    {
        startDate: '2015-08-04',
        endDate: '2019-06-14',
        budget: 782
    },
    {
        startDate: '2022-09-04',
        endDate: '2023-02-21',
        budget: 2343
    },
    {
        startDate: '2010-09-06',
        endDate: '2012-06-27',
        budget: 768
    },
    {
        startDate: '2021-03-08',
        endDate: '2023-09-16',
        budget: 254
    },
    {
        startDate: '2018-01-01',
        endDate: '2026-01-01',
        budget: 34355
    },
    {
        startDate: '2003-02-23',
        endDate: '2003-03-15',
        budget: 524
    },
    {
        startDate: '2021-05-21',
        endDate: '2022-05-01',
        budget: 434
    },
    {
        startDate: '2015-12-01',
        endDate: '2022-02-01',
        budget: 343
    }
]

export const modifyResponse = (orgResponse) => {
    const response =[]
    orgResponse.map(item => {
        let newObj = {
            id: item.id,
            name: item.name,
            startDate: presetDates[item.id - 1].startDate,
            endDate: presetDates[item.id - 1].endDate,
            budget: presetDates[item.id - 1].budget,
            userId: item.id
        }
        response.push(newObj)
    })
    return response
}
