import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  
  state = {
    giphCollection: []
  }

  handleAPICall = (giphs) => {
    this.setState({ // why does this work => this is undefined
      giphCollection: giphs.data
    })
  }
  componentDidMount() {
    const apiKey = process.env.REACT_APP_GIPHY_KEY
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${apiKey}&limit=3`)
    .then(resp => resp.json())
    .then(giphs => this.handleAPICall(giphs))
  } 

  searchFor = (event, query) => {
    const apiKey = process.env.REACT_APP_GIPHY_KEY
    event.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=3`)
    .then(resp => resp.json())
    .then(giphs => this.handleAPICall(giphs))
  }
  
  render() {
    return (
      <div>
        <GifList giphCollection={this.state.giphCollection} />
        <GifSearch searchFor={this.searchFor}/>
      </div>
    )
  }
}