import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./layouts/Navbar";
import AddPost from "./AddPost";
import Posts from "./posts/Posts";
import store from "../store";
import { Provider } from "react-redux";
import { getPosts } from "../actions/post";

const App = () => {
    useEffect(() => {
        store.dispatch(getPosts());
    }, []);
    return (
        <Provider store={store}>
            <Fragment>
                <Navbar />
                <div className="container">
                    <AddPost />
                    <Posts />
                </div>
            </Fragment>
        </Provider>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
