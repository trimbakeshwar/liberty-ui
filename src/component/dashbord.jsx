import React, { Component } from 'react';
import Headers from "../component/headers" 
import "../styles/dashbordstyle.scss"
class Dashbord extends Component{
    render(){
        return(
            <div className="dashbord">
               <div>
                  <Headers />
               </div>
               
            </div>
        );
    }
}
export default  Dashbord