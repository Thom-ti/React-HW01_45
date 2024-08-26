function Img() {
  const st1 = { borderRadius: "50%" };
  return (
    <div className="top">
      <img
        src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
        alt="profile-img"
        style={st1}
      />
    </div>
  );
}
function Email() {
  const st2 = { display: "flex", flexDirection: "column", textAlign: "center" };
  return (
    <div  className="middle" style={st2}>
      <h2>Julienne Moore</h2>
      <h3>julianne.moore@company.com</h3>
    </div>
  );
}
function Details() {
  const st3 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  };
  return (
    <div  className="bottom" style={st3}>
      <div className="status">
        <h2>25</h2>
        <h3>Posts</h3>
      </div>
      <div className="status">
        <h2>350</h2>
        <h3>Following</h3>
      </div>
      <div className="status">
        <h2>1.5K</h2>
        <h3>Followers</h3>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Img />
      <Email />
      <Details />
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
