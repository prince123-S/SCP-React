import Menu from "./Menu"
import SCP from "./SCP"
import {useState, useEffect} from 'react'

// fetch our data from supplied URL
function fetchData()
{
  return fetch("https://raw.githubusercontent.com/TuhakarainaB/scp_json/refs/heads/master/scp.json")
  .then(response => response.json())
}

function App() {

    const [scps, setSCPS] = useState([]);
    const [selectedSCP, setSelectedSCP] = useState(null);

    useEffect(
      () => {
        fetchData()
        .then(data => setSCPS(data))
      },
      []
    );
  
  return (
    <>
      <div>
        <Menu scps={scps} onSelect={setSelectedSCP}/>
        <h1>SCP React Application</h1>
        {selectedSCP && <SCP selectedSCP={selectedSCP} />}
      </div>
    </>
  )
}

export default App
