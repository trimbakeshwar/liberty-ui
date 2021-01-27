import React, { Component } from 'react';
import Headers from "../component/headers" 
import "../styles/dashbordstyle.scss"
import TotalCount from "../component/totalCounts"
import "../styles/totalCount.scss"
import ProfileRow from "../component/profilerow"
import TableRow from "../component/tablerow"
import ChartRow from "../component/chartrow"
import ManageTicket from "../component/manageticketRow"
import { connect } from "react-redux";
class Dashbord extends Component{
    constructor(props) {
        super();
        // this.getData();
    }
    // getData = () => {


       
    //     service.Get().then((res) => {
    //         console.log("data", res)
    //        // this.setState({ : Response.data.data })
    //     }).catch((err) => {

    //         console.log("err", err)
    //     })

   // }
    render(){
        return(
            <div className="dashbord">
               <div>
                  <Headers />
               </div>
                <div>
                  <TotalCount totalCount={this.props.totalCountData} />
               </div>
              <div>
                  <ProfileRow profileRowData={this.props.profileRowData} />
               </div>
                <div>
                  <TableRow TableData={this.props.TableData} />
               </div>
               <div>
                  <ChartRow ChartRowData={this.props.ChartRowData} />
               </div>
               <div>
                   <ManageTicket TicketDetails={this.props.TicketDetails} />
               </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      ...state.dashbord,
    };
  }

  export default connect(mapStateToProps)(Dashbord);
 