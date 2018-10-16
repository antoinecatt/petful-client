import React, { Component } from 'react';
import Pet from './Pet';

class Dashboard extends Component {
  render() {
    const { dogToAdopt, catToAdopt } = this.props;

    const onAdoptPet = event => {
      console.log('Button has been pushed:', this.event);
    };

    return (
      <div>
        <Pet dogToAdopt={dogToAdopt} onAdoptPet={() => onAdoptPet()} />
        <Pet catToAdopt={catToAdopt} onAdoptPet={() => onAdoptPet()} />
      </div>
    );
  }
}

export default Dashboard;
