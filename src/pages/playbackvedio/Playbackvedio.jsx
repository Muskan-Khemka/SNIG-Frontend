import React from 'react'
import ReactPlayer from 'react-player'
import './Playbackvedio.css'

const Playbackvedio = () => {
    return (
        <div>
            <div className='container'>
                <div className='vedio-div'>
                    <ReactPlayer controls={true} url={'https://youtu.be/iu-LBY7NXD4?si=HPVe38r9cgNIhbAB'} height="500px" width="1100px" />
                </div>
                <div className="description">
                    <div className="image-container">
                        <img src={'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg'} alt="Sample" />
                    </div>
                    <div className="text-container">
                        <h2 className='movie-name'>Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem, exercitationem quam inventore iusto iure deserunt, asperiores nostrum expedita delectus quo soluta repellendus! Harum laboriosam aliquam laudantium libero, fugit dolorem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, </p>
                    </div>
                    <div className="button-container">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <section id="community-section">
                <h2 className='comments'>Comments</h2>
                <div class="feedback-item">
                    <p>
                        <strong>@Rajputanacommunity993:</strong> Keep it up, this is a great video!
                    </p>
                </div>
                <div class="feedback-item">
                    <p>
                        <strong>@timoanjala435:</strong> This is a nice tutorial, thank you!
                    </p>
                </div>
                <div class="feedback-item">
                    <p>
                        <strong>@lkhjgfd678:</strong> thank you very much
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Playbackvedio
