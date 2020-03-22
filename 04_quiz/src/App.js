import React from 'react';
import Layout from './hoc/Layout/Layout.js';
import Quiz from './containers/Quiz/Quiz';
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {

    return (
      <Layout>
		  <Switch>
		  	<Route exact path='/'>
				<Quiz />
			</Route>
			<Route exact path='/question/:number'>
				<Quiz isFinish={false}/>
			</Route>
		  	<Route path='/end'>
				<Quiz isFinish/>
			</Route>
		  </Switch>
      </Layout>
    );
  }
}

export default App;
