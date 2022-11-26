import './App.css'
import MainDash from './pages/MainDash/MainDash';
import { Routes, Route } from "react-router-dom";
import Event from './pages/Event/Event';
import Interventions from './pages/Interventions/Interventions';
import Speakers from './pages/Speakers/Speakers';
import Sponsors from './pages/Sponsors/Sponsors';
import Partners from './pages/Partners/Partners';
import Blogs from './pages/Blogs/Blogs';
import Team from './pages/Team/Team';
import Participants from './pages/Participants/Participants';
import SignInSide from './pages/SignIn/SignIn';
import WithSide from './components/WithSide';
import WithoutSide from './components/WithoutSide';
import Testimonials from './pages/Testimonials/Testimonials';
import Hotels from './pages/Hotels/Hotels';
function App({location}) {
  return (
    <div>
    <div className='signin'>
    <Routes>
      <Route element={<WithoutSide />}>
          <Route path="/" element={<SignInSide />} />
      </Route>    
    </Routes>
    </div>
    <div className="App">
      <div className="AppGlass">
        <Routes>
        <Route element={<WithSide />}>
          <Route exact path="/dashboard" element={<MainDash/>}/>
          <Route exact path="/event" element={<Event/>}/>
          <Route exact path="/interventions" element={<Interventions/>}/>
          <Route exact path="/speakers" element={<Speakers/>}/>
          <Route exact path="/sponsors" element={<Sponsors/>}/>
          <Route exact path="/partners" element={<Partners/>}/>
          <Route exact path="/participants" element={<Participants/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/team" element={<Team/>}/>
          <Route exact path="/testimentials" element={<Testimonials/>}/>
          <Route exact path="/hotels" element={<Hotels/>}/>

          </Route>
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
