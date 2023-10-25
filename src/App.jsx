import {useState} from 'react';
export default function App() {
  useState(()=> {
    const [friends, setFriends] = useState([]);
    const [picture, setPicture] = useState("");
    const [name, setName] = useState("");
  })
  return (
    <div>
      <label htmlFor="picture">Picture:</label>
      <input id="picture"/>

      <label htmlFor="name">Name:</label>
      <input id="name"/>

      <button type="button">Add Friend</button>
    </div>
  );
}