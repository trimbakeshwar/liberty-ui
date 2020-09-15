import React, { Component } from 'react';
import "../styles/chartrow.scss"
import {Bar} from 'react-chartjs-2'

class ChartRow extends Component {
    render() {
        const arbitraryStackKey = "stack1"
        const data = {
            labels:['mon','tue','wed','thu','fri','sat','sun'],
            datasets:[
                {
                    stack: arbitraryStackKey,
                    label: 'data1',

                data: [3.5, 4, 1, 5, 3,7,3.5],
                borderColor:['#6970EA'],
                borderWidth:['thin'],
        backgroundColor:['#0A16FF','#0A16FF','#0A16FF','#0A16FF','#0A16FF','#0A16FF','#0A16FF'],
        pointBackgroundColor:['#D9E1FD'],
        pointBorderColor:['white']

              
            },
                {
                    stack: arbitraryStackKey,
      label: 'data1',
                    data: [4.5,4,7,3,5,1,4.5],
                    borderColor:['black'],
                    borderWidth:['thin'],
               
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
                stacked: true,
                barPercentage: 0.4,
                gridLines: {
                    display: false,
                    drawBorder: false,
                  },
            }],
           yAxes:[{
            stacked: true,
            ticks: {
                backdropColor : "rgba(255,255,255,0)",
                max: 10,
            min: 0,
                stepSize: 0.5,
                display: false //this will remove only the label
            },
               
                gridLines: {
                    display: false,
                    drawBorder: false,
                  },
                
            
               
           }]
        }

}
        return (
<div className="chartContainer">
    <div className="chartcardTwo">
        
            <div className="heding">The Current Chart</div>

            <div >
                <Bar data={data} options={option}  height="100px" style={{width:'100%'}}/>
  
                    </div>
            <div className="profilelikes"></div>
            
            <div className="statuss">Projects Status</div>
           
            <div className="pcsStatus">76,533</div>
    </div>
    <div className="chartcard">
        <div>
    <div className="dotstyle">o</div>
    <div className="linesss"></div>
    <div className="dotstyle">o</div>
    <div className="linesss"></div>
    <div className="dotstyle">o</div>
    <div className="linesss"></div>
    </div>
        <div className="updateContainer">
            <div style={{paddingBottom:"20px"}} className="heding">Update</div>
            <div className="heding">User Confirmation</div>
            
            <div className="discript">Donec rutrum congue leo eget malesuada</div>
            <div className="timing"><svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
  <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg> 7 months ago</div>
            <div  className="heding">Continuous evaluation</div>
            <div className="discript">Vivamus suscipit tortor eget felis porttitor volutpat</div>
            <div className="timing"><svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
  <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg> 7 months ago</div>
            <div  className="heding">Promotions</div>
            <div className="discript">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</div>
            <div className="timing"> <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
  <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg> 7 months ago</div>
    </div>
   </div>
</div>
        );
    }
    }
    export default ChartRow