import { useEffect, useState } from "react"

import './App.css';
import AsideInput from './Components/AsideInput/AsideInput';
import Card from './Components/Card/Card';
import AsideWeather from './Components/AsideWeather/AsideWeather';



function App() {

  const [userInput, setuserInput] = useState('')
  const [query, setQuery] = useState(44418)
  const [isFetch, setIsFetch] = useState()
  

  function handleChangeInput(event) {
    setuserInput(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch(query + '/')
        .then(response => response.json())
        .then(data => setQuery(data))

      setIsFetch(true)
    };
 
    fetchData();
  }, []);

  
  function handleClick() {
    fetch('search/?query=' + userInput)
      .then(response => response.json())
      .then(data => fetch(data[0].woeid+'/'))
      .then(response => response.json())
      .then(data => setQuery(data))
  }


  return (
    <div className="App">
      {/* <AsideInput userInput={userInput} handleChangeInput={handleChangeInput} handleClick={handleClick}/> */}
      {isFetch ? <AsideWeather query={query} /> : null }
      <div className="cardContainer">
      {isFetch ? query.consolidated_weather.slice(1).map(card => <Card query={card} />)  : null } 
      </div>
    </div>
  );
}

export default App;
