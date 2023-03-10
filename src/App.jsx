import { Fragment} from 'react'
import Introduction from './assets/components/Layout/Introduction';
import Skills from './assets/components/Layout/Skills';
import Education from './assets/components/Layout/Education';
import Languages from './assets/components/Layout/Languages';
import Contact from './assets/components/Layout/Contact';

function App() {

  return  <Fragment>
            <Introduction />
            <Skills />
            <Languages />
            <Education />
            <Contact />
          </Fragment>
}

export default App
