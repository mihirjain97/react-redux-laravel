import React from "react";

function AddPost() {
    return (
            <div className="mb-5">
                <form>
                    <div className="">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">
                                account_circle
                            </i>
                            <input
                                id="icon_prefix"
                                type="text"
                                className="validate"
                                name="name"
                            />
                            <label htmlFor="icon_prefix">Enter your Name</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">sms</i>

                            <textarea
                                id="textarea1"
                                className="materialize-textarea"
                                name="title"
                            ></textarea>

                            <label htmlFor="textarea1">Enter a Post...</label>
                        </div>
                    </div>
                    <button
                        className="btn waves-effect waves-light ml-2"
                        type="submit"
                        name="action"
                    >
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
    );
}

export default AddPost;
