import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;




































































// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React, { useState } from 'react';
// import Alert from './components/Alert';


 
// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState('null');


//   const showAlert = (message,type)=>{
//       setAlert({
//         msg: message,
//         type: type
//     })
  
//   }

//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
      
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   }
//   return (
//     <>
//     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
//     {/* <Navbar/> */}
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <TextForm heading="Enter the text to analyze below" mode={mode}/>
//     </div>
//     </> 
//   );
// }

// export default App;



















// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React, { useState } from 'react';
// import Alert from './components/Alert';

 
// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState('null');

//   const showAlert = (message,type)=>{
//      setAlert({
//        msg: message,
//        type: type
//      })
//   }




//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark mode has been enabled", "success");
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled", "success");
//     }
//   }
//   return (
//     <>
//     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
//     {/* <Navbar/> */}
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <TextForm showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode}/>
//     </div>
//     </> 
//   );
// }

// export default App;


































// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About';
// import React, { useState } from 'react';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

 
// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type)=>{
//       setAlert({
//         msg: message,
//         type: type
//       })
//       setTimeout(() => {
//           setAlert(null);
//       }, 1500);
//   }

//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark mode has been enabled", "success");
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled", "success");
//     }
//   }
//   return (
//     <>
//     <Router>
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <Switch>
//     {/* /users --> Component 1
//         /users/home --> Component 2 */}
//           <Route exact path="/about">
//             <About mode={mode} />
//           </Route>
//           <Route exact path="/">
//             <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
//           </Route>
//     </Switch>
//     </div>
//     </Router>
//     </> 
//   );
// }

// export default App;
// // import  React, { useState } from 'react';
// // import './App.css';
// // import Alert from './components/Alert';
// // import Navbar from './components/Navbar';
// // import TextForm from './components/TextForm';



// // function App() {
// //   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or no
// //   const [alert, setalert] = useState(null);

// //   const showAlert = (message,type)=>{
// //         setalert({
// //           msg: message,
// //           type: type

// //         })
// //   }



// //   const toggleMode = ()=>{
// //     if(mode === 'light'){
// //       setMode('dark');
// //       document.body.style.backgroundColor = '#042743';
// //       showAlert("Dark mode has been enabled","success");
// //     }
// //     else{
// //       setMode('light');
// //       document.body.style.backgroundColor = 'white';
// //       showAlert("light mode has been enabled","success");
// //     }
// //   }
// //   return (
// //     <>
// //     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
// //     {/* <Navbar/> */}
// //     <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
// //     <Alert alert={alert}/>
// //     <div className="container my-3">
// //     <TextForm heading="Enter the text to analyze below"/>
// //     </div>
// //     </> 
// //   );
// // }

// // export default App;











































































// // import logo from './logo.svg';
// // import './App.css';
// // import Navbar from './components/Navbar';



// // function App() {
// //   return (
// //     <>
// //     <Navbar title="myapp" about text="About myapp"/>
// //    </>
// //   );
// // }

// // export default App;
