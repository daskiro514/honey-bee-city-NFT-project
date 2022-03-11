import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Alert from '../layout/Alert'
import BeeHive from '../layout/BeeHive'
import HoneyJar from '../layout/HoneyJar'
import Metamorphosis from '../layout/Metamorphosis'
import NotFound from '../layout/NotFound'

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path='/beehive' component={BeeHive} />
        <Route exact path='/honeyjar' component={HoneyJar} />
        <Route exact path='/metamorphosis' component={Metamorphosis} />
        <Route exact path='/tokenomics' component={BeeHive} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
