import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best channel to learn web development</h3>
        <div className="play-video-info">
            <p>1525 views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />5</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Jack</p>
                <span>1.5M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>This is a video about web development</p>
            <p>Subscribe Jack to watch more tutorials on web development</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Adam <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit animi inventore odio quidem tenetur corrupti labore, deserunt dolorem error eaque neque. Suscipit eius nostrum deserunt aut fugit adipisci quibusdam.
                    Facere culpa, laborum mollitia totam iste quibusdam ratione. Voluptatem, unde distinctio deleniti perferendis repudiandae fugiat commodi minima necessitatibus, aut eius fugit eligendi labore at voluptate nobis eaque cum quam laudantium?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>240</span>
                        <img src={dislike} alt="" />
                        <span>5</span>
                    </div>
                </div>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Adam <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit animi inventore odio quidem tenetur corrupti labore, deserunt dolorem error eaque neque. Suscipit eius nostrum deserunt aut fugit adipisci quibusdam.
                    Facere culpa, laborum mollitia totam iste quibusdam ratione. Voluptatem, unde distinctio deleniti perferendis repudiandae fugiat commodi minima necessitatibus, aut eius fugit eligendi labore at voluptate nobis eaque cum quam laudantium?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>240</span>
                        <img src={dislike} alt="" />
                        <span>5</span>
                    </div>
                </div>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Adam <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit animi inventore odio quidem tenetur corrupti labore, deserunt dolorem error eaque neque. Suscipit eius nostrum deserunt aut fugit adipisci quibusdam.
                    Facere culpa, laborum mollitia totam iste quibusdam ratione. Voluptatem, unde distinctio deleniti perferendis repudiandae fugiat commodi minima necessitatibus, aut eius fugit eligendi labore at voluptate nobis eaque cum quam laudantium?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>240</span>
                        <img src={dislike} alt="" />
                        <span>5</span>
                    </div>
                </div>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Adam <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit animi inventore odio quidem tenetur corrupti labore, deserunt dolorem error eaque neque. Suscipit eius nostrum deserunt aut fugit adipisci quibusdam.
                    Facere culpa, laborum mollitia totam iste quibusdam ratione. Voluptatem, unde distinctio deleniti perferendis repudiandae fugiat commodi minima necessitatibus, aut eius fugit eligendi labore at voluptate nobis eaque cum quam laudantium?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>240</span>
                        <img src={dislike} alt="" />
                        <span>5</span>
                    </div>
                </div>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Adam <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit animi inventore odio quidem tenetur corrupti labore, deserunt dolorem error eaque neque. Suscipit eius nostrum deserunt aut fugit adipisci quibusdam.
                    Facere culpa, laborum mollitia totam iste quibusdam ratione. Voluptatem, unde distinctio deleniti perferendis repudiandae fugiat commodi minima necessitatibus, aut eius fugit eligendi labore at voluptate nobis eaque cum quam laudantium?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>240</span>
                        <img src={dislike} alt="" />
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo