import { Fragment} from 'react'
import Introduction from './assets/components/Layout/Introduction'
import Skills from './assets/components/Layout/Skills'
import Education from './assets/components/Layout/Education'
import Languages from './assets/components/Layout/Languages'

function App() {

  return  <Fragment>
            <Introduction />
            <Skills />
            <Languages />
            <Education />
          </Fragment>
}

export default App
