import React from 'react';

const Pet = ({ dogToAdopt, catToAdopt, onAdoptPet }) => {
  const dog = dogToAdopt || {};
  const cat = catToAdopt || {};
  console.log('coming from PET:', dog);
  if (dog && cat) {
    return (
      <div>
        <section>
          <header>
            <h3>{dog.name}</h3>
            <img src={dog.imageURL} alt={dog.imageDescription} />
          </header>
          <main>
            <dl>{dog.sex}</dl>
            <dl>{dog.age}</dl>
            <dl>{dog.breed}</dl>
            <dl>{dog.story}</dl>
          </main>
          <button onClick={onAdoptPet}>Adopt</button>
        </section>

        <section>
          <header>
            <h3>{cat.name}</h3>
            <img src={cat.imageURL} alt={cat.imageDescription} />
          </header>
          <main>
            <dl>{cat.sex}</dl>
            <dl>{cat.age}</dl>
            <dl>{cat.breed}</dl>
            <dl>{cat.story}</dl>
          </main>
          <button onClick={onAdoptPet}>Adopt</button>
        </section>
      </div>
    );
  }
};

export default Pet;
