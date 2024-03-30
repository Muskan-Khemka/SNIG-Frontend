import React from 'react'
import ReactPlayer from 'react-player'
import './Playbackvedio.css'
import axios from 'axios'
const Playbackvedio = () => {
    const [videoUrl, setVideoUrl] = React.useState('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4');
    const [error, setError] = React.useState('');
    const {data:res} =axios.get('http://localhost:4000/user/video',{
        headers:{
            Authorization:localStorage.getItem('token')
        }
    })
    setVideoUrl(res.data);
    return (
        <section style={{background: "#0B0D29"}}>
        <div className="container">
            <div className="video-description">
                <div className="video">
                    <ReactPlayer
                        controls={true}
                        url={videoUrl}
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem, exercitationem quam inventore iusto iure deserunt, asperiores nostrum expedita delectus quo soluta repellendus! Harum laboriosam aliquam laudantium libero, fugit dolorem. Lorem ipsum dolor sit amet. Lorem
                        </p>
                    </div>
                    <div className="button-container">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <div className='vid-descrip'>
                <h4>4 Comments</h4>
                <div className='comment'>
                    <img src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=' alt=''/>
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime.</p>
                        <div className="comment-action">
                            <img src='https://cdn1.vectorstock.com/i/1000x1000/13/80/like-icon-vector-21641380.jpg' alt=''/>
                            <span>10</span>
                            <img src='https://cdn3.vectorstock.com/i/1000x1000/14/02/dislike-icon-vector-21641402.jpg' alt=''/>
                        </div>
                    </div>
                </div>
                <div className='comment'>
                    <img src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=' alt=''/>
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime.</p>
                        <div className="comment-action">
                            <img src='https://cdn1.vectorstock.com/i/1000x1000/13/80/like-icon-vector-21641380.jpg' alt=''/>
                            <span>10</span>
                            <img src='https://cdn3.vectorstock.com/i/1000x1000/14/02/dislike-icon-vector-21641402.jpg' alt=''/>
                        </div>
                    </div>
                </div>
                <div className='comment'>
                    <img src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=' alt=''/>
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime.</p>
                        <div className="comment-action">
                            <img src='https://cdn1.vectorstock.com/i/1000x1000/13/80/like-icon-vector-21641380.jpg' alt=''/>
                            <span>10</span>
                            <img src='https://cdn3.vectorstock.com/i/1000x1000/14/02/dislike-icon-vector-21641402.jpg' alt=''/>
                        </div>
                    </div>
                </div>
                <div className='comment'>
                    <img src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=' alt=''/>
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime.</p>
                        <div className="comment-action">
                            <img src='https://cdn1.vectorstock.com/i/1000x1000/13/80/like-icon-vector-21641380.jpg' alt=''/>
                            <span>10</span>
                            <img src='https://cdn3.vectorstock.com/i/1000x1000/14/02/dislike-icon-vector-21641402.jpg' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Playbackvedio;
