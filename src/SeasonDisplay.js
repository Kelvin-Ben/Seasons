import React from 'react'
import './SeasonDisplay.css'
const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Blur, it\'s chilly!',
    iconName: 'snowflake'
  }
}
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconName} = seasonConfig[season]
  // console.log(season);
  return (
    <div className= {`season-display ${season}`}><i className={`massive icon-left ${iconName} icon`} /><h1 className='text'>{text}</h1><i className={`massive icon-right ${iconName} icon`} /></div>
  )
}

export default SeasonDisplay;