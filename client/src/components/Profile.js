import React, { Component } from 'react';



class Profile extends Component{


    render(){

        return(

          <div className='profile'>
            <div class="row">
              <div class="col s12"><p>s12</p></div>
              <div class="col s12 m4 l2"><p>s12 m4</p></div>
              <div class="col s12 m4 l8"><p>s12 m4</p></div>
              <div class="col s12 m4 l2"><p>s12 m4</p></div>
            </div>
            <div class="row">
              <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
              <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
              <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
              <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
            </div>
          </div>
        )
    }
}

export default Profile;
