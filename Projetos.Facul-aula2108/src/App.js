import { useEffect, useState } from "react";
import axios from "axios";
import Cardreceita from "./components/Cardreceita";

function App() {
  const [data, setData] = useState([])

  const url = "http://localhost:3000/receitas"

  async function fetchData() {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  useEffect(() => {
    console.log("Fetching data...");
    fetchData();
  }, []);


  return(
    <div>
      <h1>Site Receitas</h1>
      <div>
        {
             data.map((item) => {
              console.log("Item:", item);
              return <Cardreceita key={item.id} id={item.id} nome={item.nome} />;
            })
        }
      </div>
    </div>
  )

}

export default App;
