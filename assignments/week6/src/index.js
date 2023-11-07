import React from "react";//default export
import { createRoot } from "react-dom/client";//named export

import App from "./components/App";
//Element
//let elm = React.createElement("h1",null,"Welcome to your life");

//Class Component
/* class FirstComp extends Component{
    render(){
        return <h1>Welcome to your life</h1>
    }
} */

//Function based component
// let SecondComp = function(){
//     return <h1>Welcome to your life</h1>
// }
createRoot(document.getElementById("root")).render(<App/>)