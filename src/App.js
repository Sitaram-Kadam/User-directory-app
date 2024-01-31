import React from "react";
import { useState, useEffect } from "react";
import PostContainer from "./PostContainer";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dataNew) => setData(dataNew));
  }, []);

  return (
    <div >
      <div className="dir-container">
        <h2 className="dir">Directory</h2>
        {data &&
          data.map((user) => (
            <div>
              <button className="dir-user-btn"
                onClick={() => setSelectedUser(user)}
              >
                <label className="d-name-label">
                  Name:
                  <p style={{ marginTop: "0px" }} key={user.id}>
                    <span>{user.name}</span>
                  </p>
                </label>
              </button>
            </div>
          ))}
      </div>
      <PostContainer user={selectedUser} />
    </div>
  );
}

export default App;
