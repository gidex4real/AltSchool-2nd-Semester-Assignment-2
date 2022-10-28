import { Link } from "react-router-dom";

export default function Home(){
  return(
    <div className="home-page">
      <div class="home__logo-box">
          <img src="../img/crown-logo.png" 
            alt="logo" class="home__logo"/>
      </div>
      <div class="home__text-box">
          <h1 class="heading-1">
              <span class="heading__1-main">Frontend</span>
              <span class="heading__1-sub">
                 Engineering Section</span>
          </h1>
          <Link to="users" class="btn" id="home-btn">
            See Engineers
          </Link>
      </div>
    </div>
  )
}