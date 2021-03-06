const fetchLatestNews = () => {
  return fetch('https://xivapi.com/lodestone/news')
    .then( res => res.json() )
    .catch( error => console.log(error) )
}

const itemSearch = (itemString) => {
  return fetch(`https://xivapi.com/search?indexes=item&string=${itemString}`)
    .then( xivData => xivData.json() )
    .catch( error => console.log(error) )
}

const fetchCurrentPrices = (server, itemID) => {
  return fetch(`https://xivapi.com/market/${server}/items/${itemID}?key=${process.env.REACT_APP_FFXIV_API_KEY}`)
    .then( xivData => xivData.json() )
    .catch( error => console.log(error) )
}

const fetchPriceHistory = (server, itemID) => {
  return fetch(`https://xivapi.com/market/${server}/items/${itemID}/history?key=${process.env.REACT_APP_FFXIV_API_KEY}`)
    .then( xivData => xivData.json() )
    .catch( error => console.log(error) )
}

export default {
  fetchLatestNews,      // grab the latest news from the lodestone
  itemSearch,           // search the db for an item & get back a list of results.
  fetchCurrentPrices,
  fetchPriceHistory
}


