import React, { Component } from 'react'

import axios from 'axios';
import jsonView from './JsonView.js';
import './Posts.css';

export class Posts extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          count : 0,
          posts : []
      }
  }

  componentDidMount(){

    axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                    const posts = res.data;
                    this.setState({ posts });
                })
            }




  render() {
    const { posts } = this.state;
    return (
      <div className='container'>       
        
        <jsonView />

      </div>
     
    )
  }
}

export default Posts