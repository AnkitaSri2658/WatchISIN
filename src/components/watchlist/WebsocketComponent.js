
import React, { useEffect } from 'react';
import { useState } from 'react';
import useWebSocket from "react-use-websocket";
import Card from '../ui/Card';
import classes from './WebsocketComponent.module.css';



const WebsocketComponent = () => {
  const watchlist = JSON.parse(localStorage.getItem('watchlistData'));
  const ISIN = watchlist.isin;
  const [data, setData] = useState({price:0,bid:0,ask:0});
  const [unsubscribe, setUnsubscribe ] = useState(false)

  const { sendJsonMessage, getWebSocket } = useWebSocket('ws://159.89.15.214:8080/', {
    onOpen: () => console.log("WebSocket connection opened."),
    onClose: () => console.log("WebSocket connection closed."),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event) => processMessages(event),
  });

  const toggleWatchStatusHandler = () => {
    setUnsubscribe((prev) => !prev);    
  }

  const processMessages = (event) => {
    const response = JSON.parse(event.data);

    setData({
      price: response.price,
      bid:response.bid,
      ask:response.ask
    })
    console.log("response", response);
  };

  useEffect(() => {
    function connect(ISIN) {
      const unSubscribeMessage = {
        unsubscribe: "${ISIN}",
      };
      sendJsonMessage(unSubscribeMessage);

      const subscribeMessage = {
        subscribe: "${ISIN}",
      };
      sendJsonMessage(subscribeMessage);
    }
    if(unsubscribe){
    getWebSocket()?.close();}
    else{connect(ISIN);}
    
    
  }, [sendJsonMessage, getWebSocket,unsubscribe]);


  return (
    
      <Card>       
        <div className={classes.content}>
          <h1>ISIN: {ISIN}</h1>
          <h2 className={classes.price}> Price : {data.price}</h2>
          <p>BID: {data.bid}</p>
          <p>ASK: {data.ask}</p>
        </div>
        <div className={classes.actions}>
          <button className={ unsubscribe ? `${classes.button} ${classes.blueBtn}` : classes.button} onClick={toggleWatchStatusHandler}>
            { unsubscribe ? 'Subscribe':'Unsubscribe'}
          </button>
        </div>
      </Card>
    
  );
}

export default WebsocketComponent;
