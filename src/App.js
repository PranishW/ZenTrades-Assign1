import { React, useState, useEffect } from "react";
function App() {
  let a = 0
  const [data, setData] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json', {
      method: 'GET'
    });
    const json = await response.json()
    for (let i = 0; i < json.count; i++) {
      setData(olddata => [...olddata, json.products[Object.keys(json.products)[i]]])
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  data.sort((a, b) => {
    if (parseInt(a.popularity) < parseInt(b.popularity))
      return 1;
    if (parseInt(a.popularity) > parseInt(b.popularity))
      return -1;
    return 0;
  })
  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <div>
        <div>{data.length === 0 && 'No Item in the List'}</div>
        <table>
            <th>Title</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Popularity</th>
          <tbody>
          {data.map((d) => {
            return <tr key={a++}>
              <td>{d.title}</td>
              <td>{d.subcategory}</td>
              <td>{d.price}</td>
              <td>{d.popularity}</td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
