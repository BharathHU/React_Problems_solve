import React,{useState,useEffect} from 'react'

function DigitalClock() {
    const[time,setTime]=useState(new Date());
   useEffect(() => {
    // Set up the 1-second interval
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timerId);
  }, []);
  return (
    <div style={styles.container}>
      <h2>Real-Time Clock</h2>
      <div style={styles.clock}>
        {time.toLocaleTimeString()}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '50%',
    margin: '10px 0',
    textAlign: 'center',
    backgroundColor: 'green',
  },
  clock: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#333',
  }
};
export default DigitalClock
