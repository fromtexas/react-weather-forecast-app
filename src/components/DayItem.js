import React from 'react';
import moment from 'moment';

const DayItem =  props => {
    let dt_txt = props.day[0].dt_txt.slice(0, 10);
    
    const dayWeather = props.day.map((item, index) => {
       return (
           <div className='weather__forecast' key={`${item.dt_txt}${index}`}>
                <p>{moment.unix(item.dt).format('MMMM Do, YYYY @ k:mm')}:</p>
                <p className='weather__temp'>{item.main.temp}℃</p>
                <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}/>
            </div>
       ); 
    });
    return (
        <div className='weather__day-item'>
            <h2>{dt_txt.split('-').join('. ')}</h2>
            {dayWeather}
        </div>   
    );
};

export default DayItem;