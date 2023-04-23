
import { useState, useEffect } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouteComponentProps } from 'react-router-dom';
import Hero from "./Hero";

interface RouteParams {
  id: string;
}

function GetHero(props: RouteComponentProps<RouteParams>) {
  const [returnResponse, setReturnResponse] = useState("")
  const { id } = props.match.params;
  const [heroName, setHeroName] = useState("");
  const [civilName, setCivilName] = useState("");
  const [universe, setUniverse] = useState("DC|MARVEL");
  const [hero, setHero] = useState(true);
  

  function getHero(){
    const url = 'http://localhost:8080/v1/heroes?id=' + id
    console.log(url)
    axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      console.log(response.status)
      if (response.status !== axios.HttpStatusCode.Ok) {
          setReturnResponse("Não foi possivel cadastrar o heroi")
      } else {
        var data = JSON.parse(JSON.stringify(response.data))
        setHeroName(data.heroName)
        setCivilName(data.civilName)
        setHero(data.hero)
        setUniverse(data.universe)
      }
    });
  };

  useEffect(() => {
    checkIfError();
  },);
  
  function checkIfError() {
    if (returnResponse !== "") {
      return <p>{returnResponse}</p>
    }else {
      return (
        <div>
        <p>{heroName}</p>
        <p>{civilName}</p>
        <p>{universe}</p>
      </div>
      );
    }
  };


  useEffect(() => {
    getHero();
  },);

  return (
    <div onLoadCapture={getHero}>
      <p>{checkIfError}</p>
    </div>
  );
}
export default GetHero;
