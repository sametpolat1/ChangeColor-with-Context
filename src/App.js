import { useState } from 'react';
import './App.css';
import UserList from './component/UserList';
import { UserContext } from './context/UserContext';



const data = [
  {id:1 , name:"Ahmet", email:"ahmet@site.com", age:22, color:"lightcyan"},
  {id:2 , name:"Emin", email:"emin@site.com", age:25, color:"honeydew"},
  {id:3 , name:"Polat", email:"polat@site.com", age:21, color:"mistyrose"}
]

function App() {
  const [users, setUsers] = useState(data)
  const changeColor = (id,color) => {
    setUsers ( 
      users.map(item => (item.id === id ? {...item, color:color} : item))
     ) }
  return (
    // <UserContext.Provider value= "App Comp. Gelen Deger">
      <UserContext.Provider value= {{changeColor, users}}>
      <div className="App">
      <h1>App content</h1>
      <UserList/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
