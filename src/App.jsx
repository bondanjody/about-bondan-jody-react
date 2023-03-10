import { Fragment} from 'react'
import Introduction from './assets/components/Layout/Introduction';
import Skills from './assets/components/Layout/Skills';
import Education from './assets/components/Layout/Education';
import Languages from './assets/components/Layout/Languages';
import Contact from './assets/components/Layout/Contact';
import Certifications from './assets/components/Layout/Certifications';

function App() {

  return  <Fragment>
            <Introduction />
            <Skills />
            <Certifications />
            <Languages />
            <Education />
            <Contact />
          </Fragment>
}

export default App
