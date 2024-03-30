import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Playbackvedio.css";

const Playbackvedio = () => {
  // State variables for comments and new comment input
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Function to add new comment
  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, time: "Just now" }]);
      setNewComment(""); // Clear input field after adding comment
    }
  };

  return (
    <section style={{ background: "#0B0D29" }}>
      <div className="container">
        <div className="video-description">
          <div className="video">
            <ReactPlayer
              controls={true}
              url={
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              }
              height="500px"
              width="100%"
            />
          </div>
          <div className="description">
            <div className="image-container">
              <img
                src={
                  "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
                }
                alt="Sample"
              />
            </div>
            <div className="text-container">
              <h2 className="movie-name">Description</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto quidem, exercitationem quam inventore iusto iure
                deserunt, asperiores nostrum expedita delectus quo soluta
                repellendus! Harum laboriosam aliquam laudantium libero, fugit
                dolorem. Lorem ipsum dolor sit amet. Lorem
              </p>
            </div>
            <div className="button-container ">
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className="vid-descrip">
          {/* Input field for adding new comment */}
          <div className="new-comment">
            <div className="comment-box">
              <input
                className="comment-box-2"
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
            <div>
              <button onClick={addComment} className="add-button">
                Add
              </button>
            </div>
          </div>
          <h4>{comments.length} Comments</h4>
          {/* Display existing comments */}
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <img
                src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                alt=""
              />
              <div>
                <h3>
                  Jack Nicholson <span>{comment.time}</span>
                </h3>
                <p>{comment.text}</p>
                <div className="comment-action">
                  <img
                    src="https://cdn1.vectorstock.com/i/1000x1000/13/80/like-icon-vector-21641380.jpg"
                    alt=""
                  />
                  <span>10</span>
                  <img
                    src="https://cdn3.vectorstock.com/i/1000x1000/14/02/dislike-icon-vector-21641402.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Playbackvedio;
