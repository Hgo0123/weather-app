import "./AsideWeather.css"

function AsideWeather(props) {

    const { query } = props

    return(


        <div className='wrapper_weather'>
            <div className='header'>
                <div className="sfp">
                    <p>Search for places</p>
                </div>
            </div>
            <div className='icon'>
                <img className='icon_name' src={'https://www.metaweather.com/static/img/weather/' + query.consolidated_weather[0].weather_state_abbr + '.svg'} alt=""/>
            </div>
            <div className='temp'>
                <p className="temp_p" ><span className='temp_span'>{Math.round(query.consolidated_weather[0].the_temp)}</span> °C</p>
            </div>
            <div className='weather'>
                <p>{query.consolidated_weather[0].weather_state_name}</p>
            </div>
            <div className='date'>
                <p>Today</p>
                <p>.</p>
                <p>{query.consolidated_weather[0].applicable_date}</p>
            </div>
            <div className='location'>
                <p></p>
            </div>
        </div>
    )
}
export default AsideWeather