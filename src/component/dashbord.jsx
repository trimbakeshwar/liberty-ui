import React, { Component } from 'react';
import Headers from "../component/headers" 
import "../styles/dashbordstyle.scss"
import TotalCount from "../component/totalCounts"
import "../styles/totalCount.scss"
import ProfileRow from "../component/profilerow"
import TableRow from "../component/tablerow"
class Dashbord extends Component{
    render(){
        return(
            <div className="dashbord">
               <div>
                  <Headers />
               </div>
               <div>
                  <TotalCount />
               </div>
               <div>
                  <ProfileRow />
               </div>
               <div>
                  <TableRow />
               </div>
            </div>
        );
    }
}
export default  Dashbord