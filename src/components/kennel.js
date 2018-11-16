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

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals = {this.state.animals} />
            </article>
        )
    }
}

export default Kennel