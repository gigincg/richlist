import React, { useState, useEffect } from 'react';
import Page from './common/Page';
import SocialMediaShare from './common/SocialMediaShare';
import { Food } from './common/AppIcons';
import Popup from './common/Popup';
import TopRichDiagram from './common/TopRichDiagram';
import WealthRatioDiagram from './common/WealthRatioDiagram';

const countries = [{ country: "----", value: "----" },
{ country: "UK(pound)", value: "UK" },
{ country: "Astralia(dollar)", value: "Astralia" },
{ country: "USA(dollar)", value: "USA" },
{ country: "Germany(euro)", value: "Germany" },
{ country: "Spain(euro)", value: "Spain" },];

function App() {

  const [page, setPage] = useState("WEALTH");
  const [data, setData] = useState({ homeEquity: "", netIncome: "", possessionValue: "", investmentValue: "" });
  const [result, setResult] = useState({ topPersentage: 15.34, richestPerson: 690246029, wealthPersentage: 0.0001, feedMonth: 8, wealthRatio: 50, mosquitoNets: 9076 });
  const [animatedResult, setAnimatedResult] = useState({ topPersentage: 0, richestPerson: 0, wealthPersentage: 100, feedMonth: 0, wealthRatio: 0, mosquitoNets: 0 });
  const [popup, setPopup] = useState(false);
  const [coinAnimation, setCoinAnimation] = useState(0);

  useEffect(() => {
    const animater1 = setInterval(() => {
      setAnimatedResult(animatedResult => (result.topPersentage > animatedResult.topPersentage ? { ...animatedResult, topPersentage: animatedResult.topPersentage + (result.topPersentage / 100) } : { ...animatedResult, topPersentage: result.topPersentage }));
      setAnimatedResult(animatedResult => (result.richestPerson > animatedResult.richestPerson ? { ...animatedResult, richestPerson: animatedResult.richestPerson + (result.richestPerson / 100) } : { ...animatedResult, richestPerson: result.richestPerson }));
      setAnimatedResult(animatedResult => (result.wealthPersentage < animatedResult.wealthPersentage ? { ...animatedResult, wealthPersentage: (animatedResult.wealthPersentage / 1.2).toFixed(5) } : { ...animatedResult, wealthPersentage: result.wealthPersentage }));
      setAnimatedResult(animatedResult => (result.mosquitoNets > animatedResult.mosquitoNets ? { ...animatedResult, mosquitoNets: animatedResult.mosquitoNets + (result.mosquitoNets / 100) } : { ...animatedResult, mosquitoNets: result.mosquitoNets }));
      setAnimatedResult(animatedResult => (result.wealthRatio > animatedResult.wealthRatio ? { ...animatedResult, wealthRatio: animatedResult.wealthRatio + (result.wealthRatio / 100) } : { ...animatedResult, wealthRatio: result.wealthRatio }));
    }, 50);
    return () => clearInterval(animater1);
  }, []);

  useEffect(() => {
    const animater2 = setInterval(() => {
      setAnimatedResult(animatedResult => (result.feedMonth > animatedResult.feedMonth ? { ...animatedResult, feedMonth: animatedResult.feedMonth + 1 } : { ...animatedResult, feedMonth: result.feedMonth }));
    }, 300);
    return () => clearInterval(animater2);
  }, []);

  return (
    <div>
      <Page wrapperColor="#b79d59" marginColor="#b79d59" className="bg-white px-4 md:px-20 text-center">
        <Popup show={popup} onClose={() => { setPopup(false) }} className="md:max-w-lg">
          <strong className="text-xl opacity-70">Income Calculation</strong>
          <h1 className="opacity-70">To get the most accurate placing possible, please include your annual salary after tax, plus any other money that you receive each year: benefits, pensions, money from relatives, even your student loan.</h1>
          <strong className="text-xl mt-10 opacity-70">Wealth Calculation</strong>
          <h1 className="opacity-70">This route is the most precise – but you’ll need to know your net worth. That’s everything you own (value of your house, assets, shares, income, bank balance, belongings), minus anything you owe (mortgage, debts, student loans).</h1>
        </Popup>
        <img className="h-28" src="grl_mx1.png" />
        <div className="md:px-20">
          <span >
            Didn’t make it onto the yearly roll call of the mega-wealthy? Now’s your chance to find out where you actually sit in comparison to the rest of the world.
          </span>
        </div>
        <div className="flex flex-row">
          {
            [
              {
                label: "INCOME",
                value: "INCOME",
              },
              {
                label: "WEALTH",
                value: "WEALTH",
              },
            ].map((element, index) => (
              <div className={"px-6 py-1 text-lg flex justify-center items-center border border-gray-300 cursor-pointer " + (page === element.value ? "bg-gray-500 text-white" : "bg-gradient-to-t from-gray-300 to-white hover:from-gray-100")}
                onClick={() => { setPage(element.value) }}
                key={index}>
                {element.label}
              </div>
            ))
          }
        </div>
        <span onClick={() => { setPopup(true) }} className="text-sm underline text-gray-700 hover:text-black cursor-pointer">Which route should I choose ?</span>
        <div className="flex flex-col items-start">
          <h1>Select location:</h1>
          <select className="shadow-inner w-60 md:w-80 h-8 border border-gray-300"
            onChange={(e) => { setData({ ...data, location: e.target.value }); }}>
            {
              countries.map((country, index) => (
                <option value={country.value}>{country.country}</option>
              ))
            }
          </select>
        </div>
        {
          page === "INCOME" ?
            <div className="flex flex-col items-start mb-7">
              <h1>Enter annual net income:</h1>
              <input className="shadow-inner w-60 md:w-80 h-8 border border-gray-300"
                value={data.netIncome}
                onChange={(e) => { setData({ ...data, netIncome: e.target.value }) }} />
            </div>
            :
            <div>
              {
                [
                  {
                    label: "Equity in your home:",
                    value: data.homeEquity,
                    name: "homeEquity",
                  },
                  {
                    label: "Value of your possessions:",
                    value: data.possessionValue,
                    name: "possessionValue",
                  },
                  {
                    label: "Value of your investments:",
                    value: data.investmentValue,
                    name: "investmentValue",
                  },
                ].map((field, index) => (
                  <div className="flex flex-col items-start mb-3">
                    <h1>{field.label}</h1>
                    <input className="shadow-inner w-60 md:w-80 h-8 border border-gray-300"
                      value={field.value}
                      onChange={(e) => { setData({ ...data, [field.name]: e.target.value }) }} />
                  </div>
                ))
              }
            </div>
        }
        <div className="h-12 w-60 md:w-80 mt-5">
          <div className="h-full w-full bg-gray-200 relative bottom-4" />
          <div className="h-full w-full cursor-pointer flex justify-center items-center relative bottom-20 transform -translate-x-2 hover:-translate-x-0 translate-y-2 hover:translate-y-4 bg-gray-800 hover:bg-gray-900 text-white font-bold duration-200"
            onClick={() => { console.log(data) }}>
            Show my results
          </div>
        </div>
      </Page>
      <Page wrapperColor="#b79d59" marginColor="#a58b47" className="bg-white px-4 md:px-20 text-center justify-center">
        <TopRichDiagram persentage={result.topPersentage} className="px-10" />
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="bg-gray-100 h-40 w-80 flex flex-col gap-1 px-2 md:px-10 py-3">
            <h1>You’re in<span className="font-semibold mx-1">the top</span> </h1>
            <span className="text-6xl font-bold" style={{ color: "#a58b47" }}>{animatedResult.topPersentage.toFixed(2)}%</span>
            <h1><span className="font-semibold mx-1">richest people</span> in the world {page === "WEALTH" ? "" : "by income"}.</h1>
          </div>
          <div className="bg-gray-100 h-40 w-80 flex flex-col gap-3 px-2 md:px-10 py-3 items-center justify-center">
            <h1>That makes <span className="font-semibold mx-1">you </span>the</h1>
            <span className="text-5xl font-semibold" style={{ color: "#a58b47" }}>{animatedResult.richestPerson.toFixed(0).toLocaleString()}th</span>
            <h1><span className="mx-1 font-semibold">richest</span> person on earth {page === "WEALTH" ? "" : "by income"}.</h1>
          </div>
        </div>
        <SocialMediaShare />
      </Page>
      <Page wrapperColor="#fcfa3e" marginColor="#b79d59" className="bg-white px-4 md:px-20 text-center justify-center"><a />
        <div className="md:w-3/4 px-5 md:px-12 pt-8 flex flex-col items-center gap-2 m-auto bg-gray-100 text-sm tracking-wide">
          <h1 className="opacity-80">{page === "WEALTH" ? <><span className="font-bold">ƒ0.08</span> is just</> : <>In <span className="font-bold">1 hour </span>you make</>}</h1>
          <span className="text-6xl md:text-7xl font-bold" style={{ color: "#a58b47" }}>{animatedResult.wealthPersentage}%</span>
          <h1 className="opacity-80">{page === "WEALTH" ? <>of your personal wealth.</> : <>Meanwhile, the average labourer in <span className="font-semibold">Ghana </span>makes just <span className="font-semibold">$0.08 </span>in the same time.</>}</h1>
          <h1 className="opacity-80">{page === "wealth" ? "Doesn’t sound like much does it? But that’s enough to change a life. So, fancy making a big difference with that small percentage? Help our chosen charity and donate this amount, or whatever you can afford, now."
            : "It takes just a minute to do something to help though. Simply click the button and donate an hour’s pay, or whatever you can afford, to our chosen charity."}</h1>
          <h1 className="opacity-80">Your donation will be converted into GBP sterling at the next stage.</h1>
          <img src="care-international.png" className="h-16 object-contain" />
          <a href="#" className="text-sm underline text-blue-900 hover:text-blue-700 cursor-pointer mb-10">Why CARE international?</a>
          <div className="h-16 w-60 bg-gray-200" />
          <div className="h-16 w-60 cursor-pointer flex justify-center items-center relative bottom-20 transform -translate-x-2 hover:-translate-x-0 hover:translate-y-2 bg-gray-800 hover:bg-gray-900 text-white font-bold text-lg duration-200"
            onClick={() => { console.log(data) }}>
            Donate now
          </div>
        </div>
      </Page>
      <Page wrapperColor="#e2e9ea" marginColor="#b79d59" className="bg-white px-4 md:px-28 text-center flex items-center justify-center">
        <div className="mt-20 flex flex-col md:flex-row gap-5">
          <div className="flex flex-col font-bold">
            <h1 style={{ color: "#b79d59" }} className="text-9xl">{animatedResult.feedMonth.toLocaleString()}</h1>
            <h1 className="text-4xl">months</h1>
          </div>
          <Food className={"h-40 w-40 text-black translate duration-500 transform " + (animatedResult.topPersentage > 0 ? "translate-y-0" : "-translate-y-full")} />
        </div>
        <span className="w-20"><span className="font-bold">1% </span>of your wealth could feed a family of four in Ethiopia for <span className="font-bold">{animatedResult.feedMonth} months.</span></span>
        <SocialMediaShare className="mt-10" />
      </Page>
      <Page wrapperColor="#e2e9ea" marginColor="#b79d59" className="bg-white px-4 md:px-32 text-center flex items-center justify-center">
        <WealthRatioDiagram wealthRatio={result.wealthRatio} />
        <span>
          <span className="font-bold mx-1 mt-5 md:mt-10">Your</span>
          personal wealth is equal to the combined wealth of
          <span className="font-bold mx-1">{animatedResult.wealthRatio.toFixed(0)} people</span>
          in
          <span className="font-bold mx-1">Afghanistan</span>.
        </span>
        <SocialMediaShare className="mt-10" />
      </Page>
      <Page wrapperColor="#e2e9ea" marginColor="#b79d59" className="bg-white px-4 md:px-32 text-center flex items-center justify-center">
        <div className="flex flex-col">
          <img src="mosquito_mx1.gif" className="h-40 object-contain transform translate-y-10" />
          <strong style={{ color: "#b79d59" }} className="text-7xl md:text-9xl z-10">{animatedResult.mosquitoNets.toFixed(0).toLocaleString()}</strong>
          <strong className="text-4xl">mosquito nets</strong>
        </div>
        <span>
          Your wealth could pay for
          <span className="font-bold mx-1">{animatedResult.mosquitoNets.toFixed(0).toLocaleString()} Long Lasting Insecticidal Nets</span>
          in Malawi. Each net protects a child from Malaria and other potentially fatal diseases for 4/5 years.</span>
        <SocialMediaShare className="mt-10" />
      </Page>
      <Page wrapperColor="#e9e9e8" marginColor="#767677" className="bg-white px-4 md:px-32 text-center flex items-center justify-center">
        <img src="coin_mx1.png" className="h-28" />
        <strong className="text-4xl">Feeling a little richer?</strong>
        <h1>Richer and ready to give some of your new found wealth to those who need it most? Support our chosen charity and feel a whole lot better for the rest of your day.</h1>
        <h1><a href="https://web.archive.org/web/20191229002006/http://www.careinternational.org.uk/" className="underline text-blue-500 hover:text-blue-700">CARE International</a> fights poverty and injustice in over 80 countries around the world to help the world's poorest people find routes out of poverty.</h1>
        <img src="care-international.png" className="h-16 object-contain" />
        <div className="h-16 w-60 md:w-80 mt-5">
          <div className="h-full w-full bg-gray-200 relative" />
          <div className="h-full w-full cursor-pointer flex justify-center items-center relative bottom-20 transform -translate-x-2 hover:-translate-x-0 translate-y-2 hover:translate-y-4 bg-gray-800 hover:bg-gray-900 text-white font-bold duration-200"
            onClick={() => { console.log(data) }}>
            Donate now
          </div>
        </div>

      </Page>
    </div>
  );
}

export default App;
