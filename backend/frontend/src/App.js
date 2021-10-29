import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import HomeScreen from './screens/HomeScreen'
import ProjectScreen from './screens/ProjectScreen'
import {Jumbotron} from 'react-bootstrap'
import {HashRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Header/>
    <main className="py3">
        <Container>
            <Route path="/" component={HomeScreen} exact/>
            <Route path="/project/:id" component={ProjectScreen}/>
        </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
