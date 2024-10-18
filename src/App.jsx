import PropTypes from "prop-types"



 function App(props) {
  

  return (
   
      <div>
      {/* <h1>
        {newdata.map((no,i)=>
        <h1 key={i}>{no}
        {sum=(sum+no)}
        </h1>
        )}
       

       
      </h1>
      {sum} */}
      <h1>we are going</h1>
      {props.name}
      {props.age}
      {props.email}
      {props.isMarried}
      {props.childern}
      </div>
   
  )
}
App.Prototype={
  email:PropTypes.string.isRequired,
  age:PropTypes.number
}
 function App1(props) {
  

  return (
   
      <div>
      {/* <h1>
        {newdata.map((no,i)=>
        <h1 key={i}>{no}
        {sum=(sum+no)}
        </h1>
        )}
       

       
      </h1>
      {sum} */}
      <h1>we are going</h1>
      {props.name}
      {props.age}
      {props.email}
      {props.isMarried}
      {props.childern}
      </div>
   
  )
}
App.Prototype={
  email:PropTypes.string.isRequired,
  age:PropTypes.number
}

App.Default={
  name:"radha"
}
export default {App,App1}
