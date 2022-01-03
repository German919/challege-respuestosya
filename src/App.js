import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from 'react';
import { filterName, getAllUsers, updateName } from './actions';

function App() {

  const [name, setName] = useState("")

  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  useEffect(()=>{
    dispatch(getAllUsers())
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterName(name))
    setName("")

  }

  const handleChange = (e) => {
    setName(()=> e.target.value)
  }

  const handleUpdate = () => {
    dispatch(updateName(name))
    setName("")
  }
  
  return (
    <div className="App">

    <form onSubmit={handleSubmit}>
      <input 
        name="name"
        value={name}
        type="text"
        onChange={handleChange}

      />
      <button>search</button>
    </form>
    <button onClick={handleUpdate}>Update</button>
      {
      users.length > 0 ?
      <h3>name: {users[0].name.first} - apellido: {users[0].name.last} </h3>  : "" 
      
      }  
      <table >
        <thead>
          <tr>
            <th>nombre apellido</th>
            <th>calle nro</th>
            <th>ciudad</th>
            <th>provincia</th>
            <th>pais</th>
            <th>codigo postal</th>
            <th>latitud</th>
            <th>longitud</th>
          </tr>
        </thead>
      <tbody>
        {
          users?.map( (user, i) => (
              <tr key={i}>
                <td> {user.name.first} {user.name.last} </td>
                <td> {user.location.street.name} {user.location.street.number}</td>
                <td> {user.location.city}</td>
                <td> {user.location.state}</td>
                <td> {user.location.country}</td>
                <td> {user.location.postcode}</td>
                <td> {user.location.coordinates.latitude}</td>
                <td> {user.location.coordinates.longitude}</td>
              </tr>
          ))
        }
      </tbody>
      </table>

    </div>
  );
}

export default App;
