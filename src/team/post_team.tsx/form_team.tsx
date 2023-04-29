
import { useState } from "react";
import axios from "axios"
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function FormTeam() {
  const [name, setName] = useState("");
  const [universe, setUniverse] = useState("DC|MARVEL");
  const [returnResponse, setReturnResponse] = useState("")

  const handleSubmit = (data: React.FormEvent<HTMLFormElement>)  => {
    data.preventDefault();
    // TODO fazer validação de inputs
    axios({
      method: 'POST',
      url: 'http://localhost:8080/v1/teams',
      data: {
        name: name,
        universe: universe
      },
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      console.log(response.status)
      if (response.status !== axios.HttpStatusCode.Created) {
          return setReturnResponse("Não foi possivel cadastrar o time")
      } else {
        return setReturnResponse("Cadastro realizado com sucesso")
      }
    });
  };

  
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }

  const inputChangeHandlerSelect= (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLSelectElement>) => {
      setUniverse(event.target.value)
  }


  return (
    <div className="container text-center" id="form-hero">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Team name</label>
        <input id="name"  className="form-control" itemID="exampleFormControlInput1" type="text" value={name} onChange={(e)=>inputChangeHandler(setName, e)}></input>
        <br /><label htmlFor="universe">Universe</label>
        <select className="form-select" defaultValue={universe} onChange={(e)=>inputChangeHandlerSelect(setUniverse, e)}>
          <option value="DC">DC</option>
          <option value="MARVEL">Marvel</option>
          <option value="DC|MARVEL">DC e Marvel</option>
        </select>
        <input className="btn btn-success" type="submit"></input>
      </form>
      <p>{returnResponse}</p>
    </div>
    
  );
}
export default FormTeam;
