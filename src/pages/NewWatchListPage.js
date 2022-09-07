import { useNavigate } from 'react-router-dom';

import NewWatchListForm from '../components/watchlist/NewWatchListForm';

function NewWatchListPage() {
  const navigate = useNavigate();

  function addWatchlistHandler(watchlistData) {
    console.log(watchlistData);
    //add data into database for a record as I dont have it I am saving it in localstorage
    localStorage.setItem('watchlistData',JSON.stringify(watchlistData));    
    navigate('/web');
    
  }

  return (
    <section>
      <h1 style={{textAlign: 'center',marginTop: '100px'}}>Add ISIN to your WatchList</h1>
      
     { <NewWatchListForm onAddWatchlist={addWatchlistHandler} />}
    </section>
  );
}

export default NewWatchListPage;
