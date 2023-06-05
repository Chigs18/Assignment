
import { useState } from 'react';
import './App.css';
import { Users } from "./users";

function App() {

  const [value, setValue] = useState('');
  const [datasource, setDatasource] = useState(Users);
  const [tablefilter, setTablefilter] = useState([]);

  const filterData = (e) =>{
    if(e.target.value !== ''){
      setValue(e.target.value);
      const filterTable =  datasource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
      setTablefilter([...filterTable])
    }
    else{
      setValue(e.target.value)
      setDatasource([...datasource])
    }
  }

  return (
    <>
      <label htmlFor="search" style={{marginLeft:'500px'}}>
        Search by Task:
        <input id="search" type="text" value={value} onChange={filterData} />
      </label>

      <table align='center'>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            </tr>
        </thead>
        <tbody>
          {value.length > 0 ? tablefilter.map((data) => {
            return(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
              </tr>
            )
          }) : 
          datasource.map((data) => {
            return(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
