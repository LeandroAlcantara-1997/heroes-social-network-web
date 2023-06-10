
import { useState, useEffect } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  id: string;
}

function DeleteTeam(props: RouteComponentProps<RouteParams>) {
  const [returnResponse, setReturnResponse] = useState("")
  const { id } = props.match.params;

  

  function deleteTeam(){
    console.log(id)
    const url = 'http://localhost:8080/v1/teams?id=' + id
    axios({
      method: 'DELETE',
      url: url,
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      console.log(response.status)
      if (response.status !== axios.HttpStatusCode.NoContent) {
          setReturnResponse("Não foi possivel encontrar o time")
      } else {
        var data = JSON.parse(JSON.stringify(response.data))
        console.log(data)
        setReturnResponse("Time deletado com sucesso")
      }
    });
  };


  useEffect(() => {
    deleteTeam();
  },);

  return (
    <div onLoadCapture={deleteTeam}>
      <p>{returnResponse}</p>
    </div>
  );
}
export default DeleteTeam;
