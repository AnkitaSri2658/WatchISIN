import { createContext, useState } from 'react';

const WatchlistContext = createContext({
  Watchlist: [],
  totalWatchlist: 0,
  add: (Watchlist) => {},
  remove: (watchlistId) => {},
  itemIsAvailable: (watchlistId) => {}
});

export function WatchlistContextProvider(props) {
  const [userWatchlist, setUserWatchlist] = useState([]);

  function addHandler(Watchlistitem) {
    setUserWatchlist((prevUserWatchlist) => {
      return prevUserWatchlist.concat(Watchlistitem);
    });
  }

  function removeHandler(watchlistId) {
    setUserWatchlist(prevUserWatchlist => {
      return prevUserWatchlist.filter(watchlist => watchlist.id !== watchlistId);
    });
  }

  function itemIsAvailableHandler(watchlistId) {
    return userWatchlist.some(watchlist => watchlist.id === watchlistId);
  }

  const context = {
    Watchlist: userWatchlist,
    totalWatchlist: userWatchlist.length,
    add: addHandler,
    remove: removeHandler,
    itemIsAvailable: itemIsAvailableHandler
  };

  return (
    <WatchlistContext.Provider value={context}>
      {props.children}
    </WatchlistContext.Provider>
  );
}

export default WatchlistContext;
