
const currencyValue={
    "UK":5,
    "ASTRALIA":3,
    "USA":4,
    "GERMANY":4,
    "SPAIN":3,
    "INDIA":1
}

const dataBase={
    highestWealth:100000000,
    totalPeople:450000000,
    avgWealth:10000,
}

export const WealthCalculation=(data,result)=>{
    console.log(data)
    if (data.location !== "" && data.homeEquity + data.possessionValue + data.investmentValue>0)
    {
        const wealth = currencyValue[data.location] * (data.homeEquity + data.possessionValue + data.investmentValue);
        const topPersentage=1;
        return { ...result, topPersentage: 15.34, richestPerson: 690246029, wealthPersentage: 0.0001, feedMonth: 8, wealthRatio: 50, mosquitoNets: 9076, }
    }
    
    else
    return {...result};
}

export const IncomeCalculation=(data,result)=>{
    console.log(data)
    if (data.location !== "" && data.netIncome > 0)
    {
        const wealth = currencyValue[data.location] * data.netIncome;

        return { ...result, topPersentage: 15.34, richestPerson: 690246029, wealthPersentage: 0.0001, feedMonth: 8, wealthRatio: 50, mosquitoNets: 9076, }
    }
    else
    return { ...result };
}
