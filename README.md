![](https://github.com/MartinSWDev/MartinSWDev.github.io/blob/master/assets/img/header.png?raw=true)
# Lug Lite 🧳
# 🏆 Winner of the Amadeus Global Sustainability Hackathon Open Data Challenge 2022
<img src="https://github.com/MartinSWDev/MartinSWDev.github.io/blob/master/assets/img/cert%202.png?raw=true" height="300">

The 1AHACK4SUSTAINABILITY welcomed students with a coding background ready to put their skills through a fun and interactive 48hrs of sustainable coding online from October 14 to the 16th 2022.

# Table of Contents
1.  [Deployed Version](#deployed-version)
2.  [The Challenge](#the-challenge)
    1. [Open Data](#open-data)
    2. [Additional Data](#additional-data)
    3. [SDG](#sdg)
    4. [The Issue](#the-issue)
    5. [Solution](#solution)
    6. [How It Works](#how-it-works)
    7. [Behind The Scenes](#behind-the-scenes)
3.  [Demo](#demo)
4.  [Tech Decisions](#tech-decisions)
5.  [Notes](#notes)

# Deployed Version
At some point this will go down due to API keys getting cancelled

[Check out the deployed version here](https://lug-lite.vercel.app/)

# The Challenge
<img src="https://github.com/MartinSWDev/MartinSWDev.github.io/blob/master/assets/img/Open%20data%20challenge.PNG?raw=true" height="300">
Use at least 1 source of open data to make travel more sustainable addressing 1 of the 17 United Nations SDG's

### Open Data:
[Airport Codes - Open Flights](https://openflights.org/)

[Global Emissions Data - OECD](https://stats.oecd.org/Index.aspx?DataSetCode=AIRTRANS_CO2)

### Additional Data
[Flight Emissions - Chooose](https://www.chooose.today/)

### SDG
<img src="https://github.com/MartinSWDev/MartinSWDev.github.io/blob/master/assets/img/sdg250%20(1).png?raw=true" height="100">

[Goal 12, Responsible consumption and production](https://www.globalgoals.org/goals/12-responsible-consumption-and-production/)

### The Issue
- Systems Aviation Industry accounts for 3& of Global C0₂ Emissions
- CO₂ is emitted when fuel is produced and used 
- The more weight a plane is carrying, the more fuel is used
- Overpacking: 60% of Brits admit overpacking when travelling with most overpacked items in luggage being: Clothes, Shoes, Electronics, Toiletries and Books

### Solution
Lug Lite - A web app that shows users how much carbon emissions they could save by reducing their luggage weight

It can be used at home pre-check-in to encourage an appropriate amount of luggage and ways they can reduce the amount in their bags.

It will highlight both negative and positive feedback in response to their choices.

### How it works
1. Enter Flight details

This step helps work out the distance that your plane is flying by requesting data from an API

2. Enter luggage weight

This calculates the fuel use and CO₂ emissions of that weight. 

3. Answer reduction questions about luggage

What types of items and how many items are you carrying.

4. Suggestions

Lug Lite will give helpful suggestions of recommended amounts and reduction questions encourage you to travel lite / with less. 

5. Update

Update your luggage weight in the app and Lug Lite will tell you how much carbon emissions you have saved

### Behind the scenes
- The entered flight data makes a request to an API for distance and emissions data for the flight
- The entered luggage weight is used to calculate the emissions from that weight. 
- The user is provided with this info and the number of emissions their actions can reduce this by.
- Using open data on aviation emissions users can see what difference collective action like theirs can make 
- User emission savings are saved in database to show total savings across all their flights

# Demo
https://user-images.githubusercontent.com/98239525/220607231-64f2d232-d654-45d6-a62c-aba52524a766.mp4

# Tech Decisions
- NextJS - Not something I had used before, wanted something fast that only loaded what was necessary and would allow components to reduce code
- Styling (CSS) - Went without a framework to try reduce work done by the client
- Hosting (~Azure~ Vercel) - We wanted to to use Azure due its carbon neutral / efficiency status but ran into issues at the time, have moved to vercel
- Database (MongoDB) - Had used it before and was easy to add large amounts of data
- API Calls (Axios) - Again something I had used before and knew would work

# Notes
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
