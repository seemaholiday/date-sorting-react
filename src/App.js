import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [dateList, setDateList] = useState(
    [{date:"1/2/2020"},
    {date:"1/1/2020"}, {date:"2/8/2002"}, 
    {date:"2/3/2023"}, {date:"2/11/2021"}, {date:"2/2/2016"}, 
    {date:"2/5/2000"}, {date:"2/3/2025"}, {date:"2/3/2009"}, 
    {date:"5/3/2011"}
  ])
    const [sortList, setSortList] = useState([])
  useEffect(()=>{
    const sortData=()=>{
        dateList.sort((a, b)=> new Date(a.date) - new Date(b.date))
        setSortList(dateList)
    }
    sortData()
  }, [])
  return (
    <div className="App">
        <h1>Date Sort</h1>
        <select>
        {
          sortList.map((item)=>{
            return(
              <option>{item.date}</option>
            )
          })
        }
        </select>
    </div>
  );
}

export default App;
