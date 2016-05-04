import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {id:1, name: "Jon Snow"},
      {id:2, name: "Tyrion Lannister"},
      {id:3, name: "Cersei Lannister"},
      {id:4, name: "Sansa Stark"},
      {id:5, name: "Arya Stark"},
      {id:6, name: "Jorah Mormont"},
      {id:7, name: "Jamie Lannister"},
      {id:8, name: "Samwell Tarly"},
      {id:9, name: "Theon Greyjoy"},
      {id:10, name: "Lord Varys"},
      {id:11, name: "Petyr \"Littlefinger\" Baelish"},
      {id:12, name: "Brienne of Tarth"},
      {id:13, name: "Bronn"},
      {id:14, name: "Bran Stark"},
      {id:15, name: "Podrick Payne"},
      {id:16, name: "Davos Seaworth"},
      {id:17, name: "Missandei"},
      {id:18, name: "Daenerys Targaryen"},
      {id:19, name: "Melisandre"},
    ]}
  }
  render() {
    let rows = this.state.data.map( person => {
      // unique key is required amongst siblings
      return (
        <PersonRow
          key={person.id}
          data={person}
        />
      )
    });
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

export default App
