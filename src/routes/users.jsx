import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";


export default function Users() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?results=50&seed=abc`
  );

  // console.log(data?.results);

  const per_page = 5;
  const total = data?.results?.length;
  const pages = total;

  const skip = page * per_page - per_page;

  const apiResult = data?.results;
  // console.log(apiResult)

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!loading && error) {
    return <h1>Error fetching data...</h1>;
  }

  return (
    <div className="users-container">
      <Link to={-1} className="btn back-btn">Back</Link>
      <h1 className="userProfile-heading">List of
        Frontend Engineers</h1>
      {data?.results.slice(skip, skip + per_page).map(each => {
        const name = `${each.name.first} ${each.name.last}`;
        const phone = `${each.phone}`;
        const photo = `${each.picture.thumbnail}`;

        // console.log(each.picture.thumbnail)
        // console.log(each)
        return (
          <li key={each.login.uuid} className="user-item">
            <img
              className="card-image"
              // src="https://www.w3schools.com/howto/img_avatar.png"
              src={photo}
              alt="user pic"
            />
            <h4 className="user-heading">{name}</h4>
            <p className="user-number">{phone}</p>
            <Link to={`/users/${each.login.uuid}`} state={apiResult} className="btn profile-btn">
              View Profile
            </Link>
          </li>
        );
      })}

      <div className="pagination">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn pagination-btn"
        >
          Prev
        </button>

        {Array.from({ length: 5 }, (_, x) => x + 1).map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => setPage(item)}
              className="btn pagination-btn"
            >
              {item}
            </button>
          );
        })}

        <button
          disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
          className="btn pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
