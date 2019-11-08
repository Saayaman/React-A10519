import React from 'react';
import axios from 'axios';

class AxiosComp extends React.Component {
  componentDidMount() {
    axios.get('https://api.github.com/users/octocat/repos')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }
  render() {
    return (
      <div>HI</div>
    )
  }
}

export default AxiosComp;