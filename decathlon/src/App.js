import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Panel from './components/panel/Panel'
import Home from './pages/Home'
import History from './pages/History'
import ParamsTest from './pages/ParamsTest'
import Container from "./components/layout/Container"

const App = () => {
    return (
        <Container>
            <Panel />
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/history" component={History} />
                <Route exact path="/params/:id" component={ParamsTest} />
            </Switch>
        </Container>
    )
}

export default App
