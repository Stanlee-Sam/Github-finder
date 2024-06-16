// import "./navbar.css";
// import store from "../body/store";

// const Navbar = () => {
//   const { username, setUsername } = store();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const searchUsername = formData.get("search");
//     setUsername(searchUsername);
//   };

//   return (
//     <section>
//       <nav>
//         <div className="title">
//           <h1>GITHUB FINDER</h1>
//         </div>
//         <div className="owner">
//           <p>
//             By <a href="https://github.com/Stanlee-Sam">Stanley Amunze</a>
//           </p>
//         </div>
//         <div className="search-bar">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="search"
//               id="search"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="enter a username"
//             />
//             <button type="submit">Search</button>
//           </form>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default Navbar;
import "./navbar.css";
import store from "../body/store";

const Navbar = () => {
  const { username, setUsername } = store();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchUsername = formData.get("search");
    setUsername(searchUsername);
  };

  return (
    <section>
      <nav>
        <div className="title">
          <h1>GITHUB FINDER</h1>
        </div>
        <div className="owner">
          <p>
            By <a href="https://github.com/Stanlee-Sam">Stanley Amunze</a>
          </p>
        </div>
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              defaultValue={username}
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
