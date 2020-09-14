import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "../styles/tablerow.scss"
class ManageTicket extends Component {
    render() {
        return (
            <div className="ticketcontainer ">
                <div className="heding">Manage Tickets</div>
                <div className="manageContainer">

                    <div>
                        <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                        </svg>
                    </div>
                    <div>
                        <div className="ticketName">
                            James :[#23047] Donec rutrum congue leo eget malesuada.
                        </div>
                        <div className="ticketDetail">
                            Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim vivamus.
                        </div>
                        <div className="timingsss">
                            <div style={{ paddingRight: "10em" }}>Last responded :3 hours ago </div>
                            <div>Due in : 2 Days</div>
                        </div>
                    </div>
                    <div>
                        <Button style={{padding:"5px",backgroundColor: "blue",color: "white"}}>Manage</Button>
                    </div>

                </div>
                <div className="manageContainer">

                    <div>
                        <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                        </svg>
                    </div>
                    <div>
                        <div className="ticketName">
                            James :[#23047] Donec rutrum congue leo eget malesuada.
                        </div>
                        <div className="ticketDetail">
                            Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim vivamus.
                        </div>
                        <div className="timingsss">
                            <div style={{ paddingRight: "10em" }}>Last responded :3 hours ago </div>
                            <div>Due in : 2 Days</div>
                        </div>
                    </div>
                    <div>
                        <Button style={{padding:"5px",backgroundColor: "blue",color: "white"}}>Manage</Button>
                    </div>

                </div>
                <div style={{borderStyle:"none"}} className="manageContainer">

                    <div>
                        <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                        </svg>
                    </div>
                    <div>
                        <div className="ticketName">
                            James :[#23047] Donec rutrum congue leo eget malesuada.
                         </div>
                        <div className="ticketDetail">
                            Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim vivamus.
                        </div>
                        <div className="timingsss">
                            <div style={{ paddingRight: "10em" }}>Last responded :3 hours ago </div>
                            <div>Due in : 2 Days</div>
                        </div>
                    </div>
                    <div >
                        <Button style={{padding:"5px",backgroundColor: "blue",color: "white"}}>Manage</Button>
                    </div>

                </div>

            </div>
        );
    }
}
export default ManageTicket