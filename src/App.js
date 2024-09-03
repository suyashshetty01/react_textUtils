
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
function App() {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
    }
    const [Mode, setMode] = useState('light');
    const toggle = () => {
        if (Mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#677';
            showAlert('Dark Mode Enabled Successfully', 'Success');
            setTimeout(() => {
                setAlert(null);
            }, 2000)
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light Mode Enabled Successfully', 'Success');
            setTimeout(() => {
                setAlert(null);
            }, 2000)
        }
    }

    return (
        <>
            <Router>
                <Navbar title="Learning" mode={Mode} toggleMode={toggle} />
                <Alert alert={alert} />
                <Routes>
                < Route exact path='/' element={<TextForm heading="Enter your Text to analyze below" color={Mode} />}/>

                    <Route exact path='/about' element={<About/>}/>                    
                </Routes>
                <div className="container my-3">
                </div>
            </Router>
        </>
    )
}

export default App;
