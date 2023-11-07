import { Component } from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
class App extends Component{
    render(){
        return <div>
            
            <nav><Nav/></nav>  
            <main><Main/></main> 
            <footer><Footer/></footer>
            </div>
    }
}
export default App;