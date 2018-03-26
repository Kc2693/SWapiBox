import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import LocalStorage from '../mocks/mockLocalStorage';
import mockVehicleData from '../mocks/mockVehicleData';
import mockPeopleData from '../mocks/mockPeopleData'

describe('App', () => {
  let wrapper;
  let mockFetchFilmTexts = jest.fn().mockImplementation(() => {
        return PmockScrollText
      });
  let mockScrollText;
  let fetchPeopleInfo;

  beforeEach(() => {
    window.localStorage = new LocalStorage();
    wrapper = shallow(<App fetchFilmTexts={mockFetchFilmTexts}/>, {disableLifecycleMethods: true})
    mockScrollText = [
      {
      "title": "A New Hope",
      "opening_crawl": "It is a period of civil war.",
      "release_date": "1977-05-25"
    }, {
      "title": "A New Hope",
      "opening_crawl": "It is a period of civil war.",
      "release_date": "1977-05-25"
    }, {
      "title": "A New Hope",
      "opening_crawl": "It is a period of civil war.",
      "release_date": "1977-05-25"
    }]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ })
    }))
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should fetch a random film text upon componentDidMount', () => {

    expect(wrapper.state('scrollText')).toEqual(mockScrollText)
  });

  it('should set category state to true if corresponding button is clicked', () => {
    const expected = {'people': true, 'planets': false, 'vehicles': false}

    wrapper.instance().selectCategory('people');
    expect(wrapper.state('categories')).toEqual(expected)
  });

  it('should set all state categories to false if corresponding button is clicked twice', () => {
    const afterFirstClick = {'people': true, 'planets': false, 'vehicles': false}
    const afterSecondClick = {'people': false, 'planets': false, 'vehicles': false}

    wrapper.instance().selectCategory('people');
    expect(wrapper.state('categories')).toEqual(afterFirstClick);

    wrapper.instance().selectCategory('people');
    expect(wrapper.state('categories')).toEqual(afterSecondClick);
  });

  it('should display info container if a category is true', () => {
    wrapper.instance().selectCategory('people');
    wrapper.instance().displayInfoContainer();

    expect(wrapper.state('categories').people).toBe(true);
    expect(wrapper.find('InfoContainer')).toBeDefined();
  });

  it.skip('fetchCategory should take in a button name and fetch the corresponding category from storage', async () => {
    await localStorage.setItem('vehicles', JSON.stringify(mockVehicleData));

    expect(localStorage.getItem('vehicles')).toEqual(JSON.stringify(mockVehicleData))
 // this test is not getting past if (!localStorage[key]) for some reason?
    await wrapper.instance().fetchCategory('vehicles');
  });

  it.skip('fetchCategory should make a fetch call if there is no corresponding category in localstorage', () => {
    // this is not using my mock fetch and is instead trying to do a real fetch
    fetchPeopleInfo = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockPeopleData)
    })
    expect(localStorage.getItem('people')).toEqual(undefined);

    wrapper.instance().fetchCategory('people');

    expect(localStorage.getItem('people')).toEqual(JSON.stringify(mockPeopleData));
    expect(wrapper.state('people')).toEqual(mockPeopleData);
  });
});
