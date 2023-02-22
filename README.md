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
4.  [Deployed Version](#deployed-version)
5.  [Deployed Version](#deployed-version)
6.  [Deployed Version](#deployed-version)
7.  [Deployed Version](#deployed-version)

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

### SDG:
<img src="https://github.com/MartinSWDev/MartinSWDev.github.io/blob/master/assets/img/sdg250%20(1).png?raw=true" height="100">

[Goal 12, Responsible consumption and production](https://www.globalgoals.org/goals/12-responsible-consumption-and-production/)

### The Issue:
As a plane burns fuel this creates CO₂ emissions. Aviation makes up around 2.5% of global CO₂ emissions. The heavier a plane is the more fuel it burns and the more CO₂ emissions it creates. When passengers bring on board more luggage this increases the weight and therefore increases the  CO₂ emissions.

### Solution:
Our solution is to help reduce the amount of luggage that passengers take on board and therefore reduce the amount of CO₂ emissions.

We will do this through a helpful luggage check app that can be used at home pre-check-in that encourages an appropriate amount of luggage and ways they can reduce the amount in their bags.

It will highlight both negative and positive feedback in response to their choices.

### How it works
1. Enter Flight details

This step helps work out the distance that your plane is flying by requesting data from an API

2. Enter luggage weight and details

This calculates the fuel use and CO₂ emissions of that weight. 

3. Answer reduction questions

Helpful suggestions of recommended amounts and reduction questions encourage you to travel lite / with less. 

4. Show benefits

Show the amount of reductions they made on this trip and how this benefits the planet. Keep track of their reductions to show all reductions over time. 

### Behind the scenes
- The entered flight data makes a request to an API for distance and emissions data for the flight
- The entered luggage weight is used to calculate the emissions from that weight. 
- The user is provided with this info and the number of emissions their actions can reduce this by.
- Using open data on aviation emissions users can see what difference collective action like theirs can make 
- User emission savings are saved in database to show total savings across all their flights

# Demo
https://user-images.githubusercontent.com/98239525/220607231-64f2d232-d654-45d6-a62c-aba52524a766.mp4

# Notes
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
