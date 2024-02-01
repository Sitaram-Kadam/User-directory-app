import React from "react";
import { useState, useEffect } from "react";
import PostContainer from "./PostContainer";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="main-div">
      {!data && <p>Loading...</p>}
      <div>
        {data && (
          <div className="dir-container">
            <h2 className="dir">Directory</h2>

            {data.map((user) => (
              <div>
                <button
                  className="dir-user-btn"
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
        )}
        <PostContainer user={selectedUser} />
      </div>
    </div>
  );
}

export default App;
