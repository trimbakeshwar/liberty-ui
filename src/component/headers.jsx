import React, { Component } from 'react';
import "../styles/headers.scss"
class Headers extends Component {
    render() {
        return (
            <div className="upperbar">
                <div className="nameContainer">
                    <div className="iconsblock">
                        <div className="nameOfUi">
                            Liberty
                        </div>
                        <div style={{ color: "Blue" }}>UI</div>
                    </div>
                    <div className="icons">
                        <div className="notification">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                                <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                        </div>
                        <div className="AccountCircles">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <div style={{ backgroundColor: "blue", color: "white" }} className="dashbordSection" >
                        DASHBORD
                </div>
                    <div className="dashbordSection">
                        WIDGETS
                </div>
                    <div className="dashbordSection">
                        UI ELEMENTS
                </div>
                    <div className="dashbordSection">
                        PAGES
                </div>
                    <div className="dashbordSection">
                        FORMS
                </div>
                    <div className="dashbordSection">
                        APPS
                </div>
                </div>
            </div>
        );
    }
}
export default Headers