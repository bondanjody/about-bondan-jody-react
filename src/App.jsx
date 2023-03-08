import { Fragment} from 'react'
import Header from './assets/components/Layout/Header'
import Introduction from './assets/components/Layout/Introduction'
import Skills from './assets/components/Layout/Skills'
import Education from './assets/components/Layout/Education'

function App() {

  return  <Fragment>
            <Header />
            <Introduction />
            <Skills />
            <Education />
          </Fragment>
}

export default App
