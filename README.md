# Trade Republic frontend challange

### `Dependency`

React JS
React Router
React-Icons
React-Use-Websocket
React Testing Library
Jest


### `npm install`

Install all dependency to run this app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will open a form to enter ISIN number.

## Socket Reference

You can connect with the WebSocket server at

```URL
ws://159.89.15.214:8080/
```


To subcribe to a specific security

```JSON
{
    "subscribe": "${ISIN}"
}
```

To unsubscribe to a specific security

```JSON
{
    "unsubscribe": "${ISIN}"
}
```
Example: 
{"isin":"DE000BASF111"}

## Description
This application is developed in React JS. Its an application where user can add ISIN number and watch the real time price for that instrument. 

- For using this app 
- Go the the app
- Enter ISIN number 
- This will redirect to watcher page where we can see the live update.
- One can Unsubscribe/subscribe ISIN

Currently I design this app for just one item but I did design framework for extension. We can add more items and generalise the code via watchlist component and by creating websocket hooks. Also, we can manage the ISIN record in DB and have a context ("Watchlist-context") to check wether item is already available? or if any data is required to update.
We can improve the usuability by providing visually appealing elements such as when price is going up show price in green else in red. 
We should make this app in a way that had minimal clicks and easy to navigate to avoid users memory and motor load. 



1. What happens in case the WebSocket disconnects? How would you go further to keep
   the live data available or inform the user? Please discuss the challenges.

- We can add a message at the top of application  "Connection lost with retry icon" and we can show the last data we had. Also, once user click on retry button, we can again retry to connect.

2. What happens if a user adds an instrument multiple times to their list? Please discuss possible challenges and mitigations.
- once user has added instrument, we will not let him add again by verifying from our database (as will keep a record of users watchlist in ourdatabase or at users local space like cookies indexed db etc) when user start to enter ISIN number and do submit form. We can show message there only that this instrument is already in your watchlist. 

3. What potential performance issues might you face when this app scales with multiple subscriptions? How would you improve the speed and user experience?
- there will be multiple websockets call and within a second we will have thousands of records that will be rendering at the frontend. So we can have two types of problem 
1st - our server can be overloaded with a lot of request that we can handle via load balancing
2nd - our frontend module will render multiple time and can slow the application 
for the second scanario we can do a lot of things like we can first optimise our app to load only things that are necessary - lazy loading.
we can do JavaScript minification and module bundling
Incase of react we must provide key to listItems
We can manage cache at cleint side and server side
minimum images / or we can use webfonts

