import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import covid19 from './images/covid19.png'
import { Card, Table } from './components'


function App() {
  let today = new Date()
  let date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
  const [totalIndiaCase, setTotalIndiaCase] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalStateWiseCount, settotalStateWiseCount] = useState([])
  console.log(totalStateWiseCount);
  const [totalStateArrayLegth, setTotalStateArrayLength] = useState("")
  let [filteredData] = useState()


  useEffect(() => {
    loadData()
  }, [])


  const loadData = async () => {
    setLoading(true)
    const resp = await axios.get('https://data.covid19india.org/data.json')
    setTotalIndiaCase(resp.data.statewise.slice(0, 1))
    const totalStateCount = resp.data.statewise.slice(1)
    settotalStateWiseCount(totalStateCount)
    setTotalStateArrayLength(totalStateCount.length)
    setLoading(false)
  }

  const stateSearch = (search) => {
    filteredData = totalStateWiseCount.filter((value) => {
      return value.state.toLowerCase().includes(search.toLowerCase())
    })
    settotalStateWiseCount(filteredData)
  }

  return (
    <div className='App'>
      <span>
        <img className='covid-img' src={covid19} alt='covid' />
        <h2 className='title'>Live COVID-19 cases tracker</h2>
      </span>
      <h1>{date}</h1>
      <Card totalIndiaCase={totalIndiaCase} />
      <Table totalStateWiseCount={totalStateWiseCount}
        totalStateArrayLegth={totalStateArrayLegth}
        loading={loading}
        loadData={loadData}
        filteredData={filteredData}
        stateSearch={stateSearch}
      />
    </div>
  );
}

export default App;
