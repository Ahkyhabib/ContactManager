//This file is going to act as a prvider, some will call it a store for instance.  This is going to be a class I wrap around this application.  All components will be wrapped in this provider component.

import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Sarah Sames",
        email: "sarah@gmail.com",
        phone: "444-444-4444"
      },
      {
        id: 3,
        name: "James Tylor",
        email: "james@gmail.com",
        phone: "333-333-3333"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
