import React, { useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState({hr:0, min:0, sec:0,milli:0 });
    const [status, setStatus] = useState()

    let updHr = time.hr;
    let updMin = time.min;
    let updSec = time.sec;
    let updMilli = time.milli;

    const start = () =>{
        myFun();
        setStatus(setInterval(myFun, 10))
    }
    const stop = () =>{
        clearInterval(status)
    }

    const reset = () =>{
        clearInterval(status);
        setTime({hr:0, min:0, sec:0,milli:0 })
    }

    const myFun = () =>{
        if(updMilli === 100){
            updMilli=0;
            updSec++
        }
        if(updSec === 60){
            updSec=0
            updMin++
        }
        if(updMin === 60){
            updMin=0;
            updHr++
        }
        updMilli++;
        return setTime({hr:updHr, min:updMin, sec:updSec,milli:updMilli})

    
    }
  return (
    <div className='container'>
        <div className="watch">
            <div className="time">
            <h1>{time.hr+" : "+time.min+" : "+time.sec+" : "+time.milli}</h1>
            </div>
            <div className="btn">
                <button className='green' onClick={start}>Start</button>
                <button className='red' onClick={stop}>Stop</button>
                <button className='yellow' onClick={reset}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Stopwatch
