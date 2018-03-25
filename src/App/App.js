import React, { Component } from 'react';
import './App.css';
import ScrollText from '../ScrollText/ScrollText';
import Button from '../Button/Button';
import CategoryButtonContainer from '../categoryButtonContainer/categoryButtonContainer'
import InfoContainer from '../InfoContainer/InfoContainer';
import { fetchFilmTexts, fetchPeopleInfo } from '../API/peopleDataCleaner';
import fetchPlanetInfo from '../API/planetDatacleaner';
import fetchVehicleInfo from '../API/vehicleDataCleaner';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      categories: {'people': false, 'planets': false, 'vehicles': false},
      favorites: [],
      scrollText: [],
      people: [],
      planets: [],
      vehicles: []
    }
  }

  async componentDidMount() {
    if (!localStorage['filmText']) {
      await fetchFilmTexts().then(text => localStorage.setItem('filmText', JSON.stringify(text)))
    }
    this.fillScrollText()
  }

  fillScrollText() {
    const scrollText = JSON.parse(localStorage.getItem('filmText'))
    this.setState({scrollText})
  }

  selectCategory = (category) => {
    let categoryKeys = Object.keys(this.state.categories)

    let newState = categoryKeys.reduce((list, category) => {
        list[category] = false;
        return list;
      }, {});

    categoryKeys.forEach((key) => {
      if (key === category && !this.state.categories[key]) {
        newState[category] = true;

        this.setState({categories: newState})
      } else if (key === category){
        newState[category] = false;

        this.setState({categories: newState})
      }
    });
  };

  displayInfoContainer = () => {
    return Object.keys(this.state.categories).reduce((accu, key, index) => {

      if (this.state.categories[key]) {
        accu.push(<InfoContainer key={index} categoryInfo={this.state[key]}/>)
      }
      return accu;
    }, [])
  }

  showFavorites = () => {
    console.log('hello!')
  }

  fetchCategory = async (key) => {
    if (!localStorage[key]) {
      let determineButton;
      switch (key) {
        case 'people':
          determineButton = await fetchPeopleInfo()
          break;
        case 'planets':
          determineButton = await fetchPlanetInfo()
          break;
        case 'vehicles':
          determineButton = await fetchVehicleInfo()
          break;
      }
      await localStorage.setItem(key, JSON.stringify(determineButton))
    }

    const getStorage = await JSON.parse(localStorage.getItem(key))

    await this.setState({[key]: getStorage})
  }


  render() {
    return (
      <div className="App-container">
        <div className="Background"></div>
        <div className="Foreground">
          <h1 className="main-title">SWapiBox</h1>
          <Button controlFunc={this.showFavorites} name={'Favorites '} id={'faves'} faveNum={this.state.favorites.length}/>
          <CategoryButtonContainer categories={Object.keys(this.state.categories)}
                                 controlFunc={this.selectCategory}
                                 fetchFunc={this.fetchCategory}
          />
          {this.state.scrollText.length > 1 && <ScrollText films={this.state.scrollText}/>}
          {this.displayInfoContainer()}
        </div>
      </div>
    );
  }
}

export default App;
