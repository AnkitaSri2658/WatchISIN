import { useContext } from 'react';

import WatchlistContext from '../store/watchlist-context';
import WatchList from '../components/watchlist/WatchList';

function WatchListPage() {
  const watchlistCtx = useContext(WatchlistContext);

  let content;

 if (watchlistCtx.totalWatchlist === 0) {
    content = <p>You got no watchlist yet. Start adding some?</p>;
  } else {
    content = <WatchList watchlists={watchlistCtx.Watchlist} />;
  }

  return (
    <section>
      <h1>My Watchlist</h1>
      {content}
    </section>
  );
}

export default WatchListPage;
