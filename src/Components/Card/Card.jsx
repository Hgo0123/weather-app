import './Card.css'

function Card(props) {

    const { query } = props


    const formatYmd = date => date.toISOString().slice(0, 10);
    
    const tomorrow = (d => new Date(d.setDate(d.getDate() + 1)))(new Date);

    
  

    return (
        <div className="card">
            <p>{formatYmd(tomorrow) === query.applicable_date ? 'Tomorrow' : query.applicable_date}</p>
            <img src={'https://www.metaweather.com/static/img/weather/' + query.weather_state_abbr + '.svg'} alt=""/>
            <div className="temp_card">
                <div>{Math.round(query.min_temp)}°C</div>
                <div>{Math.round(query.max_temp)}°C</div>
            </div>
        </div>
    )
}

export default Card