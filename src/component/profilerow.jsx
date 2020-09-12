import React, { Component } from 'react';
import "../styles/profilerow.scss"
import Button from 'react-bootstrap/Button'
class ProfileRow extends Component {
    render() {
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
                        <div  className="proffesion">
                            developer
                        </div>
                        <div  className="bio">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Lorem
                        </div>
                        <div  className="buttonclass">
                            <Button style={{backgroundColor:"blue",color:"white",padding:"10px"}} variant="primary">Follow</Button>
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

                </div>
                <div className="profilecard">

                </div>
            </div>
        );
    }
}

export default ProfileRow