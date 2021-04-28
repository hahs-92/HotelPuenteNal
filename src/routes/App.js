import { BrowserRouter, Switch, Route } from 'react-router-dom'

//PAGES
import { Home } from '../pages/Home'
import { AboutUs } from '../pages/AboutUs'
import { Rooms } from '../pages/Rooms'
import { Contact } from '../pages/Contact'
import { Error404 } from '../pages/Error404'

//COMPONENTS
import { Layout } from '../components/Layout'


export const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/AboutUs' component={ AboutUs } />
                    <Route exact path='/Rooms' component={ Rooms } />
                    <Route exact path='/Contact' component={ Contact } />
                    <Route component={ Error404 } />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
