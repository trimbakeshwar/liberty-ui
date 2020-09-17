import React, { Component } from 'react';
import "../styles/tablerow.scss"
import Table from 'react-bootstrap/Table'
import datas from "../datas.json";
class TableRow extends Component {

     
     


    render() {
        let tabledata=this.props.TableData
        return (
            <div style={{overflow:"auto"}} className="tablecontainer">

                <table>
                    <tr>
                        <th>ID	</th>
                        <th>Assignee</th>
                        <th>Task Details</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Amount</th>
                        <th>Tracking Number</th>
                       
                    </tr>
                    {tabledata.map((info, index) => {
                        return<tr>
                            <td>{info.ID}</td>
                    <td>{info.Assignee}</td>
                            <td>{info.TaskDetails}</td>
                    <td>{info.PaymentMethod}</td>
                    <td><div className={(info.PaymentStatus === "Approved")?("paymentApproved"):("paymentReject")} >{info.PaymentStatus}</div></td>
                    <td>{info.Amount}</td>
                    <td>{info.TrackingNumber}</td>
                            

                        </tr>
                    })
                    }
                </table>
            </div>
        );
    }
}
export default TableRow