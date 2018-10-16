import React, { Component } from 'react';

class Pet extends Component {
  componentDidMount() {
    console.log('Pet component mounted');
  }
  render() {
    const {
      name,
      imageURL,
      imageDescription,
      age,
      sex,
      breed,
      story,
      onAdoptPet
    } = this.props;

    return (
      <div>
        <section>
          <header>
            <h3>{name}</h3>
            <img src={imageURL} alt={imageDescription} />
          </header>
          <main>
            <dl>{sex}</dl>
            <dl>{age}</dl>
            <dl>{breed}</dl>
            <dl>{story}</dl>
          </main>
          <button onClick={onAdoptPet}>Adopt</button>
        </section>
      </div>
    );
  }
}

export default Pet;
