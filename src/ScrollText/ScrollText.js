import React from 'react';
import './scroll-text.css';


const Sidebar = (props) => {

  const randomFilmText =
    props.films[Math.floor(Math.random()*props.films.length)].opening_crawl


  return (
    <div className="sidebar">
      <marquee className="story-text"
               behavior="scroll"
               direction="left"
               scrollamount="15">
        {randomFilmText}
      </marquee>
    </div>
  )


}


export default Sidebar;
