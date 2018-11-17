import React, {
  Component
} from 'react'


class AnimalList extends Component {
  render() {
    // let ownerArray = [];

    return ( <section className = "animals" > {
      this.props.animals.map(animals => {
        let ownerArray = [];
        this.props.owner.forEach(singleOwner => {
          if (singleOwner.animalId === animals.id) {
            ownerArray.push(singleOwner.name);
          }
        });
        return(
        <div key={animals.id}>
          <p>{animals.name}</p>
          <p>{animals.type}</p>
          {ownerArray.map(theOneOwner =>
            <p>{theOneOwner}</p>
          )}
        </div>)

      })
    }

    </section>)
      }}


export default AnimalList