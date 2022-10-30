import { Link } from "react-router-dom";
import img from "../img/crown-logo.png";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home__logo-box">
        <Link to='/'><img
          className="home__logo"
          src={img}
          alt="user pic"
          /></Link>
      </div>
      <div className="home__text-box">
        <h1 className="heading-1">
          <span className="heading__1-main">Frontend</span>
          <span className="heading__1-sub">
            Engineering Section</span>
        </h1>
        <Link to="users" className="btn" id="home-btn">
          See our Engineers
        </Link>
      </div>
    </div>
  )
}