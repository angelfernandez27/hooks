import { useEffect, useState } from "react";

const App = () => {
  const [option, setOption] = useState("hoteles");
  const [data, setData] = useState([]);
  let url = "https://pruebagcd.herokuapp.com/";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url + option);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [option]);
  const handleOption=(e)=>{
      if(option==="hoteles"){
          setOption("paquetes")
      }else if(option==="paquetes"){
          setOption("ofertas")
      }else{
          setOption("hoteles")
      }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
            <button className="btn btn-primary my-5" onClick={handleOption}>Cambiar Opción</button>
        </div>
        <div className="col-6 my-5 ">
          <ul className="my-5" type="none">
            {data.map((o, i) => {
              return <li key={i + o.nombre}>{o.nombre}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
