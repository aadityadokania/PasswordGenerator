import Passwordbox from "./components/Passwordbox";
import SingleCard from "./components/SingleCard";
import { useState, useEffect } from "react";
import {
  random,
  randomSymbol,
  randomLower,
  randomUpper,
} from "./Utils/Password";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(15);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [errors, setErrors] = useState({});

  const generatePassword = () => {
    setErrors({});
    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("At least one character type must be selected");
    } else if (passwordLength === "0") {
      return setErrors("Password length cannot be 0");
    } else if (passwordLength === "") {
      return setErrors("Invalid password length");
    } else if (passwordLength > 80) {
      return setErrors("Password length cannot exceed 80 characters");
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3);
      if (lowercase && choice === 0) {
        password += randomLower();
      } else if (uppercase && choice === 1) {
        password += randomUpper();
      } else if (symbols && choice === 2) {
        password += randomSymbol();
      } else if (numbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl mt-12 mb-12 flex justify-center underline">
        Password Generator
      </h1>

      <div className="cardContainer flex justify-center border-0 p-2 flex-col items-center">
        <input type="number" className="p-2 border-2 outline-none w-[40%] mb-1 focus:border-black min-w-[300px]" placeholder="Enter Length of Password" value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)}/>
        <SingleCard title="Numbers" value={numbers} setvalue={setNumbers}/>
        <SingleCard title="LowerCase" value={lowercase} setvalue={setLowercase}/>
        <SingleCard title="UpperCase" value={uppercase} setvalue={setUppercase} />
        <SingleCard title="Symbols (eg. !@#$%^*()&)" value={symbols} setvalue={setSymbols}/>
        <button
          className="p-2 bg-blue-500 text-white w-40 mt-4 active:bg-blue-700"
          onClick={generatePassword}
        >
          Generate
        </button>
        <Passwordbox password={password} />

        
        {errors.length && <li className="font-bold text-red-500">{errors}</li>}
      </div>
    </div>
  );
}

export default App;
