import React, { Component } from 'react'
import './land.css'
import '../../general.css'

export class land extends Component {
  render() {
    return (
      <div >
        <div className='land'>
     <h2>{this.props.title}</h2>
   </div>
        
      </div>
    )
  }
}

export default land
