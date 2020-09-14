import React, { Component } from 'react';
import "../styles/profilerow.scss"
import Button from 'react-bootstrap/Button'
class ProfileRow extends Component {


    render() {
        const options = {
            animationEnabled: true,
            title: {
                text: "Monthly Sales - 2017"
            },
            axisX: {
                valueFormatString: "MMM"
            },
            axisY: {
                title: "Sales (in USD)",
                prefix: "$"
            },
            data: [{
                yValueFormatString: "$#,###",
                xValueFormatString: "MMMM",
                type: "spline",
                dataPoints: [
                    { x: new Date(2017, 0), y: 25060 },
                    { x: new Date(2017, 1), y: 27980 },
                    { x: new Date(2017, 2), y: 42800 },
                    { x: new Date(2017, 3), y: 32400 },
                    { x: new Date(2017, 4), y: 35260 },
                    { x: new Date(2017, 5), y: 33900 },
                    { x: new Date(2017, 6), y: 40000 },
                    { x: new Date(2017, 7), y: 52500 },
                    { x: new Date(2017, 8), y: 32300 },
                    { x: new Date(2017, 9), y: 42000 },
                    { x: new Date(2017, 10), y: 37160 },
                    { x: new Date(2017, 11), y: 38400 }
                ]
            }]
        }
        return (
            <div className="profilecontainer">
                <div className="profilecard">
                    <div className="infoContainer">
                        <div>
                            <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                            </svg>
                        </div>
                        <div className="Name">
                            Suraj Hudge
                        </div>
                        <div className="proffesion">
                            developer
                        </div>
                        <div className="bio">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Lorem
                        </div>
                        <div className="buttonclass">
                            <Button style={{ backgroundColor: "blue", color: "white", padding: "10px" }} variant="primary">Follow</Button>
                        </div>
                    </div>
                    <div className="profilelikes">
                        <div>
                            <div className="digit">5896</div>
                            <div className="post">post</div>
                        </div>
                        <div >
                            <div className="digit">1596</div>
                            <div className="post">Followers</div>
                        </div>
                        <div>
                            <div className="digit">7896</div>
                            <div className="post">Likes</div>
                        </div>
                    </div>

                </div>
                <div className="profilecard">

                    <div className="details">Top Product</div>
                    <div className="quantity">598,486</div>
                    <div className="changeInPercent">6.5% change from today</div>
                    <div className="lines"></div>
                    <div className="details">Support Case</div>
                    <div className="quantity">323,360</div>
                    <div className="changeInPercent">2.5% change from yesterday</div>
                    <div>

                    </div>
                </div>
                <div className="profilecard">
                    <div className="dataSetting">
                        <div className="graphsetting">
                            <div className="digit">6,256</div>
                            <div className="post" >Total sales</div>
                        </div>
                   
                    <div className="graphsetting">
                        <div  className="digit">8569</div>
                        <div className="post">Open Campaign</div>
                    </div>
                       
                </div>
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
                <div className="dataSetting">
                    <div className="graphsetting">
                        <div className="digit">5136</div>
                        <div className="post">Online Sales</div>
                    </div>
                    <div className="graphsetting">
                        <div className="digit">4596</div>
                        <div className="post">Store Sales</div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ProfileRow