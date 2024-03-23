import React from 'react'
import ReactPlayer from 'react-player'
import './Playbackvedio.css'

const Playbackvedio = () => {
    return (
        <div className="container">
            <div className="video-description">
                <div className="video">
                    <ReactPlayer
                        controls={true}
                        url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}
                        height="500px"
                        width="100%"
                    />
                </div>
                <div className="description">
                    <div className="image-container">
                        <img src={'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg'} alt="Sample" />
                    </div>
                    <div className="text-container">
                        <h2 className='movie-name'>Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem, exercitationem quam inventore iusto iure deserunt, asperiores nostrum expedita delectus quo soluta repellendus! Harum laboriosam aliquam laudantium libero, fugit dolorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        </p>
                    </div>
                    <div className="button-container">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <section id="community-section">
                <h2 className='comments'>Comments</h2>
                <div className="feedback-items">
                    <div className="feedback-item">
                        <p>
                            <strong>@Rajputanacommunity993:</strong> Keep it up, this is a great video!
                        </p>
                    </div>
                    <div className="feedback-item">
                        <p>
                            <strong>@timoanjala435:</strong> This is a nice tutorial, thank you!
                        </p>
                    </div>
                    <div className="feedback-item">
                        <p>
                            <strong>@lkhjgfd678:</strong> thank you very much
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Playbackvedio;
