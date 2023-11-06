import React, { useEffect, useState } from 'react'

function App() {

  const[data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, []);


  return (
    <div>
      <table>
        <thead>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Age</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.nom}</td>
              <td>{d.prenom}</td>
              <td>{d.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App