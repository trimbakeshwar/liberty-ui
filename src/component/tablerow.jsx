import React, { Component } from 'react';
import "../styles/tablerow.scss"
import Table from 'react-bootstrap/Table'

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {

            tempBooksArry: []
        }
    }
    componentDidMount() {
        let tempBooksArry = [];
        for (var i = 0; i < 2; i++) {
            tempBooksArry.push({
                ID: " #320",
                Assignee: "	Mark C.Diaz",
                TaskDetails: "Support of thteme",
                PaymentMethod: "Credit card",
                PaymentStatus: "Approved",
                Amount: "$12,245",
                TrackingNumber: "JPBBN435893458"


            })
            tempBooksArry.push({
                ID: " #323",
                Assignee: "	Luke Pixel",
                TaskDetails: "New submission on website",
                PaymentMethod: "Cash on delivery",
                PaymentStatus: "reject",
                Amount: "$12,245",
                TrackingNumber: "PABT435893678"


            })

        }
        this.setState({ tempBooksArry: tempBooksArry })
    }

    render() {
        return (
            <div className="tablecontainer">

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
                    {this.state.tempBooksArry.map((info, index) => {
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