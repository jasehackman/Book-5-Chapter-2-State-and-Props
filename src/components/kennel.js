import React, { Component } from "react"
import EmployeeList from "./employee/employeeList"
import LocationList from "./location/locationList"
import AnimalList from "./animals/animalList"
import "./kennel.css"


class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]


    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
      { id: 1, name: "Bob", type: "cat" },
      { id: 2, name: "Mike", type: "dog" },
      { id: 3, name: "Steve", type: "rat" },
      { id: 4, name: "Jim", type: "cow" }
  ]

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" , animalId: 1},
    { id: 2, name: "Emma Beaton", animalId: 2 },
    { id: 3, name: "Dani Adkins" , animalId: 2},
    { id: 4, name: "Adam Oswalt" , animalId: 3},
    { id: 5, name: "Fletcher Bangs" , animalId: 3},
    { id: 6, name: "Angela Lee" , animalId: 4}
]

  // animals_ownersFromAPI = [
  //   { id:1, ownerId: 1, animalId: 4},
  //   { id:2, ownerId: 2, animalId: 4},
  //   { id:3, ownerId: 3, animalId: 1},
  //   { id:4, ownerId: 4, animalId: 2},
  //   { id:5, ownerId: 5, animalId: 3},
  //   { id:5, ownerId: 5, animalId: 3}
  // ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        // animal_owners: this.animals_ownersFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals = {this.state.animals} owner = {this.state.owners} />
            </article>
        )
    }
}

export default Kennel