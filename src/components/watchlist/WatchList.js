import WatchListItem from './WatchListItem';
import classes from './WatchList.module.css';

function WatchList(props) {
  return (
    <ul className={classes.list}>
      {props.watchlists.map((watchlist) => (
        <WatchListItem
          key={watchlist.isin}
          id={watchlist.isin}
          name={watchlist.name}
          price={watchlist.price}
          bid={watchlist.bid}
          ask={watchlist.ask}
        />
      ))}
    </ul>
  );
}

export default WatchList;
