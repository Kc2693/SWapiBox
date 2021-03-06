import React, { Component } from 'react';
import './scroll-text.css';

class ScrollText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: this.props.films,
      randomFilm: this.props.films[Math.floor(Math.random()*this.props.films.length)]
    }
  }

  render(props) {
    return (
      <div className="scroll-text">
        <marquee className="story-text"
                 behavior="scroll"
                 direction="left"
                 scrollamount="10">
          {this.state.randomFilm.opening_crawl}
        </marquee>
        <div className="movie-details">
        {this.state.randomFilm.title} ({this.state.randomFilm.release_date.slice(0,4)})
        </div>
      </div>
    )
  }
}


export default ScrollText;
