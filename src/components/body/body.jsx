// import Navbar from "../navbar/navbar";
import "./body.css";
import store from "./store";
import { useCallback, useEffect } from "react";

const Body = () => {
  const {
    username,
    userData,
    repos,
    followers,
    following,
    error,
    loading,
    setUserData,
    setRepos,
    setFollowers,
    setFollowing,
    setError,
    setLoading,
  } = store();

  const fetchGithubData = useCallback(
    async (username) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const userData = await response.json();
        console.log("User data", userData);

        if (response.ok) {
          setUserData(userData);

          const reposResponse = await fetch(
            `https://api.github.com/users/${username}/repos`
          );
          const reposData = await reposResponse.json();
          setRepos(reposData);

          const followersResponse = await fetch(
            `https://api.github.com/users/${username}/followers`
          );
          const followersData = await followersResponse.json();
          console.log("Followers data", followersData);
          setFollowers(followersData);

          const followingResponse = await fetch(
            `https://api.github.com/users/${username}/following`
          );
          const followingData = await followingResponse.json();
          console.log("Following data", followingData);
          setFollowing(followingData);
        } else {
          setError(userData.message);
          setUserData(null);
          setRepos([]);
          setFollowers([]);
          setFollowing([]);
        }
      } catch (error) {
        console.error("Catch error");
        setError("Something went wrong");
      } finally {
        setLoading(false);
        console.log("Loading finished");
      }
    },
    [setError, setFollowers, setFollowing, setLoading, setRepos, setUserData]
  );
  useEffect(() => {
    if (username) {
      fetchGithubData(username);
    }
  }, [username, fetchGithubData]);

  return (
    <section className="container">
      <div className="sidebar">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
          <>
            <div className="prof-pic">
              <img src={userData.avatar_url} alt="userData.name" />
            </div>
            <div className="details">
              <div className="name">
                <h4>{userData.name}</h4>
              </div>
              <div className="description">
                <p>{userData.bio}</p>
              </div>
              <div className="github-btn">
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>View on Github</button>
                </a>
              </div>
              <div className="location">
                <p>{userData.location}</p>
              </div>
              <div className="repositories">
                <p>{userData.public_repos}Repositories</p>
              </div>
              <div className="followers">
                <p>{userData.followers} followers</p>
              </div>
              <div className="following">
                <p>{userData.following} following</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="content">
        <div className="content-title">
          <h2>Repositories ({repos.length})</h2>
        </div>
        <div className="cards-container">
          {repos.map((repo) => (
            <div className="card" key={repo.id}>
              <div className="card-title">
                <h3>{repo.name}</h3>
              </div>
              <div className="card-description">
                <p>{repo.description}</p>
              </div>
              <div className="extras">
                <div className="fork">
                  <i className="fas fa-code-branch"></i>
                  {repo.forks_count} forks
                </div>
                <div className="star">
                  <i className="fas fa-star"></i>
                  {repo.stargazers_count} stars
                </div>
              </div>
            </div>
          ))}
          {/* <div className="card">
            <div className="card-title">
              <h3>.github</h3>
            </div>
            <div className="card-description">
              <p>Community health files for the @GitHub organization</p>
            </div>
            <div className="extras">
              <div className="fork">
                <i className="fas fa-code-branch">forks</i>
              </div>
              <div className="star">
                <i className="fas fa-star">stars</i>
              </div>
            </div>
          </div> */}
        </div>

        <div className="content-title">
          <h2>Followers ({followers.length})</h2>
        </div>
        <div className="cards-container">
          {followers.map((follower) => (
            <div className="card" key={follower.id}>
              <div className="card-title">
                <h3>{follower.login}</h3>
              </div>
              <div className="card-description">
                <p>
                  <a
                    href={follower.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {follower.html_url}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="content-title">
          <h2>Following ({following.length})</h2>
        </div>
        <div className="cards-container">
          {following.map((user) => (
            <div className="card" key={user.id}>
              <div className="card-title">
                <h3>{user.login}</h3>
              </div>
              <div className="card-description">
                <p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.html_url}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body;

// return (
//     <section className="container">
//       <div className="sidebar">
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         {userData && (
//           <>
//             <div className="prof-pic">
//               <img src={userData.avatar_url} alt={userData.name} />
//             </div>
//             <div className="details">
//               <div className="name">
//                 <h4>{userData.name}</h4>
//               </div>
//               <div className="description">
//                 <p>{userData.bio}</p>
//               </div>
//               <div className="github-btn">
//                 <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
//                   <button>View on Github</button>
//                 </a>
//               </div>
//               <div className="location">
//                 <p>{userData.location}</p>
//               </div>
//               <div className="repositories">
//                 <p>{userData.public_repos} Repositories</p>
//               </div>
//               <div className="followers">
//                 <p>{userData.followers} followers</p>
//               </div>
//               <div className="following">
//                 <p>{userData.following} following</p>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="content">
//         <div className="content-title">
//           <h2>Repositories ({repos.length})</h2>
//         </div>
//         <div className="cards-container">
//           {repos.map((repo) => (
//             <div className="card" key={repo.id}>
//               <div className="card-title">
//                 <h3>{repo.name}</h3>
//               </div>
//               <div className="card-description">
//                 <p>{repo.description}</p>
//               </div>
//               <div className="extras">
//                 <div className="fork">
//                   <i className="fas fa-code-branch"></i> {repo.forks_count} forks
//                 </div>
//                 <div className="star">
//                   <i className="fas fa-star"></i> {repo.stargazers_count} stars
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
