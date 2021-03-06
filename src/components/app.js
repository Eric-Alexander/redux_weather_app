import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React + Redux Weather Forecast App</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
