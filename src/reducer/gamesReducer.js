const initState = {
    popular: [], // Empty Array because we have a lot of popular game we set in to the Empty Array 
    newGames: [],
    upcoming: [],
    searched: [],
  };
  
  const gamesReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_GAMES":
        return {
          ...state,
          popular: action.payload.popular,
          upcoming: action.payload.upcoming,
          newGames: action.payload.newGames,
        };
      case "FETCH_SEARCHED":
        return {
          ...state,
          searched: action.payload.searched,
        };
      case "CLEAR_SEARCHED":
        return {
          ...state,
          searched: [],
        };
      default:
        return { ...state };
    }
  };
  
  export default gamesReducer;