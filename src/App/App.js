import React, { useState, useEffect } from 'react';
import Page from './common/Page';
import SocialMediaShare from './common/SocialMediaShare';
import { Food } from './common/AppIcons';
import Popup from './common/Popup';
import TopRichDiagram from './common/TopRichDiagram';
import WealthRatioDiagram from './common/WealthRatioDiagram';
import TimeToBuyCola from './common/TimeToBuyCola';
import VisibilitySensor from 'react-visibility-sensor';

const countries = [{ country: "----", value: "----" },
{ country: "UK(pound)", value: "UK" },
{ country: "Astralia(dollar)", value: "Astralia" },
{ country: "USA(dollar)", value: "USA" },
{ country: "Germany(euro)", value: "Germany" },
{ country: "Spain(euro)", value: "Spain" },];

function App() {

  const [page, setPage] = useState("WEALTH");
  const [data, setData] = useState({ homeEquity: "", netIncome: "", possessionValue: "", investmentValue: "" });
  const [result, setResult] = useState({ topPersentage: 15.34, richestPerson: 690246029, wealthPersentage: 0.0001, feedMonth: 8, wealthRatio: 50, mosquitoNets: 9076, oneHourGain: 0.64, onYearGain: 1221, oneYearGainRatio: 7, timeToBuyColaYou: 58, timeToBuyColaZimbabwe: 67, doctorEqualant: 4 });
  const [animatedResult, setAnimatedResult] = useState({ topPersentage: 0, richestPerson: 0, wealthPersentage: 100, feedMonth: 0, wealthRatio: 0, mosquitoNets: 0, oneHourGain: 0, onYearGain: 0, oneYearGainRatio: 0, timeToBuyColaYou: 0, timeToBuyColaZimbabwe: 0, doctorEqualant: 0 });
  const [popup, setPopup] = useState(false);
  const [pageAt, setPageAt] = useState(1);

  useEffect(() => {
    const animater1 = setInterval(() => {
      if (page => page === "WEALTH") {
        setAnimatedResult(animatedResult => (result.topPersentage > animatedResult.topPersentage ? { ...animatedResult, topPersentage: animatedResult.topPersentage + (result.topPersentage / 100) } : { ...animatedResult, topPersentage: result.topPersentage }));
        setAnimatedResult(animatedResult => (result.richestPerson > animatedResult.richestPerson ? { ...animatedResult, richestPerson: animatedResult.richestPerson + (result.richestPerson / 100) } : { ...animatedResult, richestPerson: result.richestPerson }));
        setAnimatedResult(animatedResult => (result.wealthPersentage < animatedResult.wealthPersentage ? { ...animatedResult, wealthPersentage: (animatedResult.wealthPersentage / 1.2).toFixed(5) } : { ...animatedResult, wealthPersentage: result.wealthPersentage }));
        setAnimatedResult(animatedResult => (result.feedMonth > animatedResult.feedMonth ? { ...animatedResult, feedMonth: animatedResult.feedMonth + .2 } : { ...animatedResult, feedMonth: result.feedMonth }));
        setAnimatedResult(animatedResult => (result.wealthRatio > animatedResult.wealthRatio ? { ...animatedResult, wealthRatio: animatedResult.wealthRatio + 1 } : { ...animatedResult, wealthRatio: result.wealthRatio }));
        setAnimatedResult(animatedResult => (result.mosquitoNets > animatedResult.mosquitoNets ? { ...animatedResult, mosquitoNets: animatedResult.mosquitoNets + (result.mosquitoNets / 100) } : { ...animatedResult, mosquitoNets: result.mosquitoNets }));

      }
      if (page => page === "INCOME") {
        setAnimatedResult(animatedResult => (result.oneHourGain > animatedResult.oneHourGain ? { ...animatedResult, oneHourGain: animatedResult.oneHourGain + (result.oneHourGain / 100) } : { ...animatedResult, oneHourGain: result.oneHourGain }));
        setAnimatedResult(animatedResult => (result.onYearGain > animatedResult.onYearGain ? { ...animatedResult, onYearGain: animatedResult.onYearGain + (result.onYearGain / 100) } : { ...animatedResult, onYearGain: result.onYearGain }));
        setAnimatedResult(animatedResult => (result.oneYearGainRatio > animatedResult.oneYearGainRatio ? { ...animatedResult, oneYearGainRatio: animatedResult.oneYearGainRatio + (result.oneYearGainRatio / 30) } : { ...animatedResult, oneYearGainRatio: result.oneYearGainRatio }));
        setAnimatedResult(animatedResult => (result.doctorEqualant > animatedResult.doctorEqualant ? { ...animatedResult, doctorEqualant: animatedResult.doctorEqualant + (result.doctorEqualant / 30) } : { ...animatedResult, doctorEqualant: result.doctorEqualant }));
        setAnimatedResult(animatedResult => (result.timeToBuyColaYou > animatedResult.timeToBuyColaYou ? { ...animatedResult, timeToBuyColaYou: animatedResult.timeToBuyColaYou + (result.timeToBuyColaYou / 30) } : { ...animatedResult, timeToBuyColaYou: result.timeToBuyColaYou }));
        setAnimatedResult(animatedResult => (result.timeToBuyColaZimbabwe > animatedResult.timeToBuyColaZimbabwe ? { ...animatedResult, timeToBuyColaZimbabwe: animatedResult.timeToBuyColaZimbabwe + (result.timeToBuyColaZimbabwe / 30) } : { ...animatedResult, timeToBuyColaZimbabwe: result.timeToBuyColaZimbabwe }));

      }

    }, 50);
    return () => clearInterval(animater1);
  }, []);

  const page1 = () => {
    return page === "WEALTH";
  }

  return (
    <div>
      <Page wrapperColor="#b79d59"
        marginColor="#b79d59"
        className="bg-white px-4 md:px-20 text-center">
        <Popup show={popup}
          onClose={() => { setPopup(false) }}
          className="md:max-w-lg">
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
        <span onClick={() => { setPopup(true) }}
          className="text-sm underline text-gray-700 hover:text-black cursor-pointer">
          Which route should I choose ?
        </span>
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
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(1) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
      </Page>
      <Page wrapperColor="#b79d59"
        marginColor="#a58b47"
        className="bg-white px-4 md:px-20 text-center justify-center">
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(2) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
        <TopRichDiagram persentage={result.topPersentage} className="px-10" />

        <div className="flex flex-col md:flex-row gap-4 items-center">

          <div className="bg-gray-100 h-40 w-80 flex flex-col gap-1 px-2 md:px-10 py-3">
            <h1>You’re in<span className="font-semibold mx-1">the top</span> </h1>
            <span className="text-6xl font-bold" style={{ color: "#a58b47" }}>{animatedResult.topPersentage.toFixed(2).toLocaleString()}%</span>
            <h1><span className="font-semibold mx-1">richest people</span> in the world {page1() ? "" : "by income"}.</h1>
          </div>

          <div className="bg-gray-100 h-40 w-80 flex flex-col gap-3 px-2 md:px-10 py-3 items-center justify-center">
            <h1>
              That makes
              <span className="font-semibold mx-1">you </span>
              the
            </h1>
            <span className="text-5xl font-semibold"
              style={{ color: "#a58b47" }}>
              {animatedResult.richestPerson.toFixed(0).toLocaleString()}
              th
            </span>
            <h1><span className="mx-1 font-semibold">
              richest
            </span> person on earth {page1() ? "" : "by income"}
              .
            </h1>
          </div>
        </div>

        <SocialMediaShare />
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(2) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
      </Page>
      <Page wrapperColor="#fcfa3e"
        marginColor="#b79d59"
        className="bg-white px-4 md:px-20 text-center justify-center">
        <a />
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(3) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
        <div className="md:w-3/4 px-5 md:px-12 pt-8 flex flex-col items-center gap-2 m-auto bg-gray-100 text-sm tracking-wide">

          <h1 className="opacity-80">
            {page1() ?
              <><span className="font-bold">ƒ0.08</span> is just</>
              :
              <>In <span className="font-bold">1 hour </span>you make</>}
          </h1>
          <span className="text-6xl md:text-7xl font-bold"
            style={{ color: "#a58b47" }}>
            {page1() ?
              <>{animatedResult.wealthPersentage}%</>
              :
              <>&euro;{animatedResult.oneHourGain.toFixed(2)}</>}
          </span>
          <h1 className="opacity-80">
            {page1() ?
              <>of your personal wealth.</>
              :
              <>Meanwhile, the average labourer in
                <span className="font-semibold">Ghana </span>
                makes just
                <span className="font-semibold">$0.08 </span>
                in the same time.
              </>}
          </h1>
          <h1 className="opacity-80">
            {page1() ?
              "Doesn’t sound like much does it? But that’s enough to change a life. So, fancy making a big difference with that small percentage? Help our chosen charity and donate this amount, or whatever you can afford, now."
              :
              "It takes just a minute to do something to help though. Simply click the button and donate an hour’s pay, or whatever you can afford, to our chosen charity."
            }
          </h1>
          <h1 className="opacity-80">Your donation will be converted into GBP sterling at the next stage.</h1>
          <img src="care-international.png" className="h-16 object-contain" />
          <a href="#" className="text-sm underline text-blue-900 hover:text-blue-700 cursor-pointer mb-10">Why CARE international?</a>
          <div className="h-16 w-60 bg-gray-200" />
          <div className="h-16 w-60 cursor-pointer flex justify-center items-center relative bottom-20 transform -translate-x-2 hover:-translate-x-0 hover:translate-y-2 bg-gray-800 hover:bg-gray-900 text-white font-bold text-lg duration-200"
            onClick={() => { console.log(data) }}>
            Donate now
          </div>
        </div>
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(3) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
      </Page>
      <Page wrapperColor="#e2e9ea"
        marginColor="#b79d59"
        className="bg-white px-4 md:px-28 text-center flex items-center justify-center">
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(4) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
        <div className="mt-20 flex flex-col md:flex-row gap-5">
          <div className="flex flex-col font-bold">
            <h1 style={{ color: "#b79d59" }} className="text-9xl">
              {page1() ?
                animatedResult.feedMonth.toFixed(0)
                :
                animatedResult.oneYearGainRatio.toFixed(0)}
            </h1>
            <h1 className="text-4xl">
              {page1() ?
                (animatedResult.feedMonth > 1 ? "months" : "month")
                :
                (animatedResult.oneYearGainRatio > 1 ? "years" : "year")}
            </h1>
          </div>
          {
            page1() ?
              <Food className={"h-40 w-40 text-black translate duration-500 transform " + (animatedResult.topPersentage > 0 ? "translate-y-0" : "-translate-y-full")} />
              :
              <img src="icons8-calendar (1).gif" className="h-40 w-40 text-black translate duration-500 transform " />
          }
        </div>

        <span>
          {
            page1() ?
              <><span className="font-bold">1% </span>of your wealth could feed a family of four in Ethiopia for <span className="font-bold">{animatedResult.feedMonth.toFixed(0)} months.</span></>
              :
              <>You earn <span className="font-bold">&euro; {animatedResult.onYearGain.toFixed(0)}</span> in <span className="font-bold">1 year</span>. It would take the average labourer in Ghana <span className="font-bold">{animatedResult.oneYearGainRatio.toFixed(0)} years</span> to earn the same amount.</>
          }
        </span>
        <SocialMediaShare className="mt-10" />
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(4) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
      </Page>
      <Page wrapperColor="#e2e9ea"
        marginColor="#b79d59"
        className="bg-white px-4 md:px-32 text-center flex items-center justify-center">
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(5) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
        {
          page1() ?
            <WealthRatioDiagram wealthRatio={result.wealthRatio} />
            :
            <TimeToBuyCola timeToBuyColaYou={result.timeToBuyColaYou} timeToBuyColaZimbabwe={result.timeToBuyColaZimbabwe} />
        }
        {page1() ?
          <span>
            <span className="font-bold mx-1 mt-5 md:mt-10">Your</span>
            personal wealth is equal to the combined wealth of
            <span className="font-bold mx-1">{animatedResult.wealthRatio.toFixed(0)} people</span>
            in
            <span className="font-bold mx-1">Afghanistan</span>.
          </span>
          :
          <span className="mt-5 md:mt-10">
            Thirsty? It’ll only take you
            <span className="font-bold"> {(animatedResult.timeToBuyColaYou / 60).toFixed(0)} hour </span>
            to earn enough for a refreshing can of cola. If the average labourer in Zimbabwe fancies one, they’ll have to work for around
            <span className="font-bold"> {(animatedResult.timeToBuyColaZimbabwe / 60).toFixed(0)} hour </span>
            for it.
          </span>
        }
        <SocialMediaShare className="mt-10" />
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(5) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
      </Page>
      <Page wrapperColor="#e2e9ea"
        marginColor="#b79d59"
        className="bg-white px-4 md:px-32 text-center flex items-center justify-center">
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(6) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
        <div className={"flex " + (page1() ? "flex-col" : "flex-row")}>
          <img src={page1() ? "mosquito_mx1.gif" : "doctor_mx1.gif"}
            className={"object-contain h-48 " + (page1() ? "transform translate-y-10" : "")} />
          <div className="flex flex-col">
            <strong style={{ color: "#b79d59" }} className="text-7xl md:text-9xl z-10">
              {page1() ?
                animatedResult.mosquitoNets.toFixed(0).toLocaleString()
                :
                animatedResult.doctorEqualant.toFixed(0)}
            </strong>
            <strong className="text-4xl">
              {page1() ?
                "mosquito nets"
                :
                "doctors"}
            </strong>
          </div>
        </div>
        <span>
          {page1() ?
            "Your wealth could pay for"
            :
            "Your monthly income could pay the monthly salaries of"}
          <span className="font-bold mx-1">
            {page1() ?
              animatedResult.mosquitoNets.toFixed(0).toLocaleString() + " Long Lasting Insecticidal Nets"
              :
              animatedResult.doctorEqualant.toFixed(0) + " doctors"}
          </span>
          {page1() ?
            "in Malawi. Each net protects a child from Malaria and other potentially fatal diseases for 4/5 years."
            :
            "in Kazakhstan."}
        </span>
        <SocialMediaShare className="mt-10" />
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(6) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
      </Page>
      <Page wrapperColor="#e9e9e8"
        marginColor="#767677"
        className="bg-white px-4 md:px-32 text-center flex items-center justify-center">
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(7) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
        <img src="coin_mx1.png" className="h-28" />
        <strong className="text-4xl">Feeling a little richer?</strong>
        <h1>Richer and ready to give some of your new found wealth to those who need it most? Support our chosen charity and feel a whole lot better for the rest of your day.</h1>
        <h1>
          <a href="https://web.archive.org/web/20191229002006/http://www.careinternational.org.uk/" className="underline text-blue-500 hover:text-blue-700">CARE International</a>
          fights poverty and injustice in over 80 countries around the world to help the world's poorest people find routes out of poverty.
        </h1>
        <img src="care-international.png" className="h-16 object-contain" />
        <div className="h-16 w-60 md:w-80 mt-5">
          <div className="h-full w-full bg-gray-200 relative" />
          <div className="h-full w-full cursor-pointer flex justify-center items-center relative bottom-20 transform -translate-x-2 hover:-translate-x-0 translate-y-2 hover:translate-y-4 bg-gray-800 hover:bg-gray-900 text-white font-bold duration-200"
            onClick={() => { console.log(data) }}>
            Donate now
          </div>
        </div>
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setPageAt(7) }}>
          <div className="h-1 w-1"></div>
        </VisibilitySensor>
      </Page>
    </div>
  );
}

export default App;
