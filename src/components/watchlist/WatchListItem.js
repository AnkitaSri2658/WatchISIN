import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './WatchListItem.module.css';
import WatchlistContext from '../../store/watchlist-context';

function WatchListItem(props) {
  const watchlistCtx = useContext(WatchlistContext);

  const itemIsAvailable = watchlistCtx.itemIsAvailable(props.id);

  function toggleWatchStatusHandler() {
    if (itemIsAvailable) {
      watchlistCtx.remove(props.id);
    } else {
      watchlistCtx.add({
        id: props.id,
        name:props.name,
        price: props.price,
        bid: props.bid,
        ask: props.ask,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
       
        <div className={classes.content}>
          <h3>{props.isin}</h3>
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>{props.bid}</p>
          <p>{props.ask}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleWatchStatusHandler}>
            {itemIsAvailable ? 'Remove from WatchList' : ''}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default WatchListItem;
