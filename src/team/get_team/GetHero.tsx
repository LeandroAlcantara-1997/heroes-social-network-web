
import { useState, useEffect } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouteComponentProps } from 'react-router-dom';
import Hero from "./Hero";

interface RouteParams {
  id: string;
}

function GetTeam(props: RouteComponentProps<RouteParams>) {
  const [returnResponse, setReturnResponse] = useState("")
  const { id } = props.match.params;
  const [heroName, setHeroName] = useState("");
  const [civilName, setCivilName] = useState("");
  const [universe, setUniverse] = useState("");
  const [hero, setHero] = useState(true);
  

  function getTeam(){
    const url = 'http://localhost:8080/v1/teams?id=' + id
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
    getTeam();
  },);

  return (
    <div>
      <p>{heroName}</p>
      <p>{civilName}</p>
      <p>{universe}</p>
      <p>{hero}</p>
    </div>
  );
}
export default GetTeam;
