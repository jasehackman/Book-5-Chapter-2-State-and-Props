import React, { Component } from 'react'


class LocationList extends Component {
  render() {
    return (
      <section className= "location">
        {
          this.props.locations.map(employee =>
            <div key={employee.id}>
              {employee.name}
            </div>
            )
      }

      </section>
    )
  }
}

export default LocationList