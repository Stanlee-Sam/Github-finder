import "./navbar.css";
import store from "../body/store";

const Navbar = () => {
  const { username, setUsername } = store();

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <section>
      <nav>
        <div className="title">
          <h1>GITHUB FINDER</h1>
        </div>
        <div className="owner">
          <p>
            By <a href="#">Stanley Amunze</a>
          </p>
        </div>
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="enter a username"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;