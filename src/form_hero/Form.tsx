
import { useState } from "react";
import axios from "axios"
function Form() {
  const [name, setName] = useState("");
  const [civilName, setCivilName] = useState("");
  const [universe, setUniverse] = useState("DC|MARVEL");
  const [hero, setHero] = useState(true);

  const handleSubmit = (data: React.FormEvent<HTMLFormElement>)  => {
    data.preventDefault();
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
      console.log(response)
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
    <div>
      <form onSubmit={handleSubmit}>
        <p>{name}, {civilName}, {universe}, {hero}</p>
        <label htmlFor="name">Hero name</label><br />
        <input id="name" type="text" value={name} onChange={(e)=>inputChangeHandler(setName, e)}></input><br />
        <label htmlFor="civil name" >Civil name</label><br />
        <input id="civil name" onChange={(e)=>inputChangeHandler(setCivilName, e)} type="text"></input><br />
        <label htmlFor="hero">Hero</label><br />
        
        <input id="hero" type="radio" value={"true"} checked={hero} onChange={(e)=>inputChangeHandlerBool(setHero, e)}></input>Sim
        <input id="hero" type="radio" checked={!hero} value={"false"} onChange={(e)=>inputChangeHandlerBool(setHero, e)}></input>Não
        <br />
        <label htmlFor="universe">Universe</label><br />
        <select defaultValue={universe} onChange={(e)=>inputChangeHandlerSelect(setUniverse, e)} id="">
          <option value="DC">DC</option>
          <option value="MARVEL">Marvel</option>
          <option value="DC|MARVEL">DC e Marvel</option>
        </select>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default Form;
