import { useRef } from 'react';
import classes from './NewWatchListForm.module.css';

function NewWatchListForm(props) {
  const nameInputRef = useRef();
  const isinInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredIsin = isinInputRef.current.value;

    const watchlistData = {
      name: enteredName,
      isin: enteredIsin,
    };

    props.onAddWatchlist(watchlistData);
  }

  return (
          <form className={classes.form} onSubmit={submitHandler}>
        
        <div className={classes.control}>
          <label htmlFor='isin'>ISIN Number</label>
          <input type='text' required id='isin' ref={isinInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Entity Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
       
        <div className={classes.actions}>
          <button className={classes.button}>Add to Watchlist</button>
        </div>
      </form>
  );
}

export default NewWatchListForm;
