import { useParams, useLocation, Link } from "react-router-dom";

export default function User() {
  const { id } = useParams();   // Outcome = angryostrich988  
  const location = useLocation();
  const datas = location.state;   // the whole array from the main page
  // console.log(datas);
  // console.log(id);
  const user = datas?.filter(val => val.login.uuid === id);      // This line is showing an empty array.)

  // User fullname
  const fullname = user[0].name.title + ' ' + user[0].name.first + ' ' + user[0].name.last;
  const address = "No. " + user[0].location.street.number + ' ' + user[0].location.street.name;

  const picture = user[0].picture.medium;

  // Converting API date to DD/MM/YEAR format
  const dates = [user[0].dob.date, user[0].registered.date]
  const formattedDate = dates.map(date => {
    const dob = new Date(date)
    const formatDate = dob.toLocaleDateString("en-GB", {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    return formatDate;
  })
  let [dob, regDate] = formattedDate;


  return (
    <>
      <Link to={-1} className="btn back-btn">Back</Link>
      <div className="container">
        <h1 className="userProfile-heading">User Profile</h1>
        <div className="user-container">
          <div className="user-photo">
            <img
              className="user-image"
              src={picture}
              alt="user pic"
            />
            <h2 className='user-heading'>Frontend Developer</h2>
            <button className="btn profile-btn">Follow</button>
            <button className="btn profile-btn">Message</button>
          </div>
          <div className="user-profile">
            <div className="user-detail">
              <h4>Name:</h4>
              <h2 className="heading-2">{fullname}</h2>
            </div>
            <div className="user-detail">
              <h4>Username:</h4>
              <h2 className="heading-2">{user[0].login.username}</h2>
            </div>
            <div className="user-detail">
              <h4>Email:</h4>
              <h2 className="heading-2">{user[0].email}</h2>
            </div>
            <div className="user-detail">
              <h4>Phone:</h4>
              <h2 className="heading-2">{user[0].cell}</h2>
            </div>
            <div className="user-detail">
              <h4>Address:</h4>
              <h2 className="heading-2">{address}</h2>
            </div>
            <div className="user-detail">
              <h4>City:</h4>
              <h2 className="heading-2">{user[0].location.city}</h2>
            </div>
            <div className="user-detail">
              <h4>State:</h4>
              <h2 className="heading-2">{user[0].location.state}</h2>
            </div>
            <div className="user-detail">
              <h4>Country:</h4>
              <h2 className="heading-2">{user[0].location.country}</h2>
            </div>
            <div className="user-detail">
              <h4>D.O.B:</h4>
              <h2 className="heading-2">{dob}</h2>
            </div>
            <div className="user-detail">
              <h4>Date Registered:</h4>
              <h2 className="heading-2">{regDate}</h2>
            </div>
          </div>
        </div>
      </div>
  
    </>
  )

}