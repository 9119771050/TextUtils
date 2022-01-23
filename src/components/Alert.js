import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>
    )
}

export default Alert

























// import React from 'react'

// function Alert(props) {
//     return (
        
//         <div className="alert alert-warning alert-dismissible fade show" role="alert">
//             <strong>{props.alert.type}</strong>: {props.alert.msg}
//             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//     )
// }

// export default Alert

























// import React from "react";

// function Alert(props) {
//   const capitalize = (word) => {
//     const lower = word.toLowerCase();
//     return lower.charAt(0).toUpperCase() + lower.slice(1);
//   }
//   return (
//     props.alert && (
//       <div
//         className={`alert alert-${props.alert.type} alert-dismissible fade 
//         show`}
//         role="alert">
//         <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="alert"
//           aria-label="Close"
//         ></button>
//       </div>
//     )
//   );
// }

// export default Alert
















// import React from 'react'

// function Alert(props) {
//     const capitalize = (word)=>{
//         const lower = word.toLowerCase();
//         return lower.charAt(0).toUpperCase() + lower.slice(1);
//     }
//     return (
//         <div style={{height: '50px'}}>
//         {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
//         </div>}
//         </div>
//     )
// }

// export default Alert

// import React from 'react'

// function Alert(props) {
//     const capitalize = (word)=>{
//         const lower = word.toLowerCase();
//         return lower.charAt(0).toUpperCase() + lower.slice(1);
//     return (
//       props.alert && <div className={'alert alert-warning alert-dismissible fade show" role="alert'}>
//         <strong>{props.alert.type}</strong>: {props.alert.msg}
//   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
//     )
// }

// export default Alert
