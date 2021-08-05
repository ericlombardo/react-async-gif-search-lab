import React, { Component } from 'react'

export default class GifList extends Component {
  
  createGiphs = () => { // turn array of objects into array of li's
    return this.props.giphCollection.map(giph => {
      return <li key={giph.id}><img src={giph.images.original.url}/></li>
    })
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.createGiphs()}
        </ul>
      </div>
    )
  }
}