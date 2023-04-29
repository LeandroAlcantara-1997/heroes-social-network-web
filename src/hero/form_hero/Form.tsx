
import { useState } from "react";
import axios from "axios"
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Form() {
  const [name, setName] = useState("");
  const [civilName, setCivilName] = useState("");
  const [universe, setUniverse] = useState("DC|MARVEL");
  const [hero, setHero] = useState(true);
  const [returnResponse, setReturnResponse] = useState("")

  const handleSubmit = (data: React.FormEvent<HTMLFormElement>)  => {
    data.preventDefault();
    // TODO fazer validação de inputs
    axios({
      method: 'POST',
      url: 'http://localhost:8080/v1/heroes',
      data: {
        heroName: name,
        civilName: civilName,
        hero: hero,
        universe: universe
      },
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      console.log(response.status)
      if (response.status !== axios.HttpStatusCode.Ok) {
          return setReturnResponse("Não foi possivel cadastrar o heroi")
      } else {
        setReturnResponse("Cadastro realizado com sucesso")
      }
    });
  };

  
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }

  const inputChangeHandlerBool = (setFunction: React.Dispatch<React.SetStateAction<boolean>>, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") {
      setHero(true)
    }else {
      setHero(false)
    }
  }

  const inputChangeHandlerSelect= (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLSelectElement>) => {
      setUniverse(event.target.value)
  }


  return (
    <div className="container text-center" id="form-hero">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Hero name</label>
        <input id="name"  className="form-control" itemID="exampleFormControlInput1" type="text" value={name} onChange={(e)=>inputChangeHandler(setName, e)}></input>
        <label htmlFor="civil name" >Civil name</label>
        <input id="civil name"  className="form-control" itemID="exampleFormControlInput1" onChange={(e)=>inputChangeHandler(setCivilName, e)} type="text"></input>
        <label htmlFor="hero">Hero</label><br />
        <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={"true"} checked={hero} onChange={(e)=>inputChangeHandlerBool(setHero, e)}></input>Sim
        <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked={!hero} value={"false"} onChange={(e)=>inputChangeHandlerBool(setHero, e)}></input>Não
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
export default Form;
