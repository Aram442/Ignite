// Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the Month date for Url Game date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1; // +1 for getting the current month you can check with out +1 by console.log(month)
  if (month < 10) {
    return `0${month}`; // to create like this 01 , 02 , 03 , etc....
  } else {
    return month;
  }
};

//Getting the Day date for Url Game date
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`; // to create like this 01 , 02 , 03 , etc....
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// console.log(currentDate); we can see the currentDate in node by this way in our file write node ./src/api.js
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`; //size = How many Game do you want to fitch?
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;