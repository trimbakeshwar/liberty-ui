import React, { Component } from 'react';
import "../styles/profilerow.scss"
import Button from 'react-bootstrap/Button'
import ReactDOM from 'react-dom'
import {Line} from 'react-chartjs-2'
import datas from "../datas.json";
class ProfileRow extends Component {


    render() {
        const todaygraphs=this.props.profileRowData.TodaysGraph
        const yesterdaygraph=this.props.profileRowData.yesterdayGraph
        const data = {
            labels:['jan','feb','mar','april','may','jun','jul'],
            datasets:[
                {
                label:'month',

                data: todaygraphs,
                borderColor:['#6970EA'],
                borderWidth:['thin'],
        backgroundColor:['#ADB4F5'],
        pointBackgroundColor:['#D9E1FD'],
        pointBorderColor:['white']

              
            },
                {data: yesterdaygraph,
                    borderColor:['#6970EA'],
                    borderWidth:['thin'],
                backgroundColor:['#D9E1FD'],
                pointBackgroundColor:['#D9E1FD'],
                pointBorderColor:['white']
                   }
            ]
        }
const option={
    
    legend: {
        display: false
      },
        scales:{
            xAxes:[{
                ticks: {
                    backdropColor : "rgba(255,255,255,0)",
                   
                    display: false //this will remove only the label
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                  },
            }],
           yAxes:[{
            ticks: {
                backdropColor : "rgba(255,255,255,0)",
                max: 10,
            min: 0,
                stepSize: 1,
                display: false //this will remove only the label
            },
               
                gridLines: {
                    display: false,
                    drawBorder: false,
                  },
                
            
               
           }]
        }

    
    
}
let salesFirstGraph=this.props.profileRowData.salesfirstGraph 
let salesSecondGraph=this.props.profileRowData.salesSecondGraph
const data1 = {
    labels:['2006','2007','2008','2009','2010','2011'],
    datasets:[
        {data: salesFirstGraph,
        borderColor:['#6970EA'],
        backgroundColor:['white'],
   
    pointBackgroundColor:['#A8BBFF'],
    pointBorderColor:['white']
    },
        {data:salesSecondGraph,
            borderColor:['#D9E1FD'],
            
    backgroundColor:['white'],
    pointBackgroundColor:['#30335C'],
    pointBorderColor:['white']
           }
    ]
}
const options={

    legend: {
        display: false
      },
scales:{
    xAxes:[{
        
        gridLines: {
            display: false,
            drawBorder: false,
          },
    }],
   yAxes:[{
    ticks: {
        max: 100,
    min: 0,
        stepSize: 25,
        Display: true //this will remove only the label
    },
       
        gridLines: {
            display: false,
            drawBorder: false,
          },
        
    
       
   }]
}


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
                           {this.props.profileRowData.developerName}
                        </div>
                        <div className="proffesion">
                            developer
                        </div>
                        <div className="bio">
                        {this.props.profileRowData.bio}  
                        </div>
                        <div className="buttonclass">
                            <Button style={{ backgroundColor: "blue", color: "white", padding: "10px" }} variant="primary">Follow</Button>
                        </div>
                    </div>
                    <div className="profilelikes">
                        <div>
        <div className="digit">{this.props.profileRowData.post}</div>
                            <div className="post">post</div>
                        </div>
                        <div >
        <div className="digit">{this.props.profileRowData.follower}</div>
                            <div className="post">Followers</div>
                        </div>
                        <div>
                            <div className="digit">{this.props.profileRowData.likes}</div>
                            <div className="post">Likes</div>
                        </div>
                    </div>

                </div>
                <div className="profilecard">

                    <div className="details">Top Product</div>
        <div className="quantity">{this.props.profileRowData.topProduct}</div>
                    <div className="changeInPercent">{this.props.profileRowData.todayChange} change from today</div>
                    <div className="lines"></div>
                    <div className="details">Support Case</div>
                    <div className="quantity">{this.props.profileRowData.supportCase}</div>
                    <div className="changeInPercent">{this.props.profileRowData.yesterdayChange} change from yesterday</div>
                    <div >
                <Line data={data} options={option}  height="190px" style={{width:'100%'}}/>
  
                    </div>
                </div>
                <div className="profilecard">
                    <div className="dataSetting">
                        <div className="graphsetting">
                            <div className="digit">{this.props.profileRowData.sales}</div>
                            <div className="post" >Total sales</div>
                        </div>
                    <div className="graphsetting">
                        <div  className="digit">{this.props.profileRowData.OpenCampaign}</div>
                        <div className="post">Open Campaign</div>
                    </div>
                </div>
                <div style={{paddingTop:'20px' ,width:'100%'}}>
                <Line data={data1} options={options} height='250px' style={{ width:'100%'}} />
                    </div>
                <div className="dataSetting">
                    <div className="graphsetting">
                        <div className="digit">{this.props.profileRowData.OnlineSales}</div>
                        <div className="post">Online Sales</div>
                    </div>
                    <div className="graphsetting">
                        <div className="digit">{this.props.profileRowData.StoreSales}</div>
                        <div className="post">Store Sales</div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ProfileRow