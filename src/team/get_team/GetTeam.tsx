
import { useState, useEffect } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouteComponentProps } from 'react-router-dom';
import './get_team.css';

interface RouteParams {
  id: string;
}

function GetTeam(props: RouteComponentProps<RouteParams>) {
  const [returnResponse, setReturnResponse] = useState("")
  const { id } = props.match.params;
  const [name, setName] = useState("");
  const [universe, setUniverse] = useState("");
  

  function getTeam(){
    console.log(id)
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
          setReturnResponse("Não foi possivel encontrar o time")
      } else {
        var data = JSON.parse(JSON.stringify(response.data))
        setName(data.name)
        setUniverse(data.universe)
        console.log(name, universe)
      }
    });
  };


  useEffect(() => {
    getTeam();
  },);

  return (
    <div onLoadCapture={getTeam}>
      <p>{name}</p>
      <p>{universe}</p>
      <p>{returnResponse}</p>
    </div>
  );
}
export default GetTeam;
