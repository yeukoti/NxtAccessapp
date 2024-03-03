import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Instructions</h1>
        <img
          src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1704864519/nxtassess/qnfln52q8vijkcaogwae.png"
          alt="website logo"
          className="home-mobile-img"
        />

        <ol type="1" className="home-description">
          <li className="each-list">Total Questions: 10</li>
          <li className="each-list">Types of Questions: MCQs</li>
          <li className="each-list">Duration: 10 Mins</li>
          <li className="each-list">
            Marking Scheme: Every Correct response, get 1 mark
          </li>
          <li className="each-list">
            All the progress will be lost, if you reload during the assessment
          </li>
        </ol>
        <Link to="/assessment">
          <button type="button" className="shop-now-button">
            Start Assessment
          </button>
        </Link>
      </div>

      <img
        src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1704864519/nxtassess/qnfln52q8vijkcaogwae.png"
        alt="website logo"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
