import React, { Component } from 'react'

export default class GifSearch extends Component {
  
  state = {
    query: ''
  }

  changeInput = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.searchFor(event, this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='searchBar'>Search</label>
        <input onChange={this.changeInput} id='searchBar' ></input>
        <button >Search For Giph</button>
      </form>
    )
  }
}