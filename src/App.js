import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

//Routing
import PrivateRoute from './components/routing/PrivateRoute';

//Screens
import LoginScreen from './components/screens/LoginScreen'
import PrivateScreen from './components/screens/PrivateScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen'
import ResetPasswordScreen from './components/screens/ResetPasswordScreen'

export default function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Switch>
        <PrivateRoute exact path='/' component={PrivateScreen}/>
        <Route exact path='/login' component={LoginScreen}/>
        <Route exact path='/register' component={RegisterScreen}/>
        <Route exact path='/forgotPassword' component={ForgotPasswordScreen}/>
        <Route exact path='/resetPassword/:resetToken' component={ResetPasswordScreen}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}
