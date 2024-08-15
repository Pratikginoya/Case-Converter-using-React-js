import React from 'react'


function Alert(props) {
    const capitalized = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '55px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{height: "43px", padding: "8px 23px"}} role="alert">
            {props.alert.msg}
        </div>}
    </div>
  )
}

export default Alert