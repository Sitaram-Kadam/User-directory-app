import React from "react";
import { useState, useEffect, memo } from "react";
import "./PostContainer.css";

function PostContainer(props) {
    let userDetails = props.user;
    const [ogposts, setogPosts] = useState(null);
    const [posts, setPosts] = useState(null);
    // const [countries, setCountries] = useState(null);
    // const [country, setCountry] = useState(null);
    // const [timezone, setTimezone] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((dataNew) => setogPosts(dataNew));
    }, []);

    // this hook will filter the required posts based on the selected user and this will only run when user is selected.
    useEffect(() => {
        if (ogposts) {
            const newPosts = ogposts.filter(
                (post) => userDetails && post.userId === userDetails.id
            );
            setPosts(newPosts);
        }
    }, [userDetails, ogposts]);

    // useEffect(() => {
    //     fetch("https://worldtimeapi.org/api/timezone")
    //         .then((res) => res.json())
    //         .then((data) => setCountries(data));
    // }, []);

    // useEffect(() => {
    //     fetch(`https://worldtimeapi.org/api/timezone/${country}`)
    //         .then((res) => res.json())
    //         .then((data) => setTimezone(data));
    // }, [country]);

    return (
        <div>
            {userDetails &&
                <div>
                    <h2 className="pr-heading" style={{ display: "flex", justifyContent: "center" }}>Profile Page</h2>

                    {/* code for showing the countries */}
                    {/* <select value={country} onChange={(e) => {
                        setCountry(e.target.value)
                    }}>
                        {countries &&
                            countries.map((item, index) => {
                                return (
                                    <option value={item}>{item}</option>
                                );
                            })
                        }
                    </select> */}
                </div>
            }

            {userDetails && (
                <div className="pr-container">
                    {/* this is a user details container. */}
                    <div className="pr-cont-1">
                        <label className="label-pr" >
                            <b>Name:</b>
                            <p className="p-tag">{userDetails.name}</p>
                        </label>
                        <label className="label-pr">
                            <b>Username:</b>
                            <p className="p-tag">
                                {userDetails.username}
                            </p>
                        </label>
                        <label className="label-pr">
                            <b>Catch phrase:</b>
                            <p className="p-tag">
                                {userDetails.company.catchPhrase}
                            </p>
                        </label>
                    </div>

                    {/* this is post section which will show the posts specific to the selected user. */}
                    <div className="pr-cont-2">
                        <label className="label-pr">
                            <b>Address:</b>
                            <p className="p-tag">{`${userDetails.address.street}, ${userDetails.address.suite}, ${userDetails.address.city}, zip-code- ${userDetails.address.zipcode}`}</p>
                        </label>
                        <label className="label-pr">
                            <b>Email:</b>
                            <p className="p-tag">
                                {userDetails.email}
                            </p>
                        </label>
                        <label className="label-pr">
                            <b>Phone:</b>
                            <p className="p-tag">{userDetails.phone}</p>
                        </label>
                    </div>
                </div>
            )}
            <div className="post-card-container">
                {posts &&
                    userDetails &&
                    posts.map((post) => {
                        return (
                            <div className="post-card">
                                <h3 style={{ marginTop: "-3px" }}>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default memo(PostContainer);
