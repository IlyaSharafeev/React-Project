

function Login(props){
   debugger
   return(
      <div>
         { props.isAuth ? props.login : 'you are not logged in'}
      </div>
   )
}

export default Login;