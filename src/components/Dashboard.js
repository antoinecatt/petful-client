import React, { Component } from 'react';
import Pet from './Pet';

class Dashboard extends Component {
  componentDidMount() {
    console.log('Dashboard Component Mounted');
  }
  render() {
    const { dogToAdopt, catToAdopt } = this.props;

    const dog = dogToAdopt[0];
    const cat = catToAdopt[0];
    const onAdoptPet = event => {
      console.log('Button has been pushed:', event.target);
    };

    return (
      <div>
        <Pet
          name={dog.name}
          imageURL={dog.imageURL}
          imageDescription={dog.imageDescription}
          age={dog.age}
          sex={dog.sex}
          breed={dog.breed}
          story={dog.story}
          onAdoptPet={() => onAdoptPet()}
        />
        <Pet
          name={cat.name}
          imageURL={cat.imageURL}
          imageDescription={cat.imageDescription}
          age={cat.age}
          sex={cat.sex}
          breed={cat.breed}
          story={cat.story}
          onAdoptPet={() => onAdoptPet()}
        />
      </div>
    );
  }
}

export default Dashboard;
