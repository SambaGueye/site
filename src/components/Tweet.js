import React, {useState, Component} from 'react';
import './Tweet.css';

export default function Tweet(props) {
    const [likes, setLikes] = useState(0)
    const like = ()=>{
        setLikes(likes+1);
    };

    
       
    return (
        <div className='main'>
            <div className='main-tweet'>
                <h2 className="title">{props.title}</h2>
                <img className='image' src={props.img} alt=""/>
                <p className="msg">{props.message}</p>
                <p className="likes">{likes}</p>
                <br/>
            <div className="buttons">
                <button onClick={like}>J'aime <i class="fas fa-thumbs-up"></i></button>
                <button>Commenter <i class="fal fa-comment-alt"></i></button>
                <button>Partager <i class="fas fa-share"></i></button>
            </div><br/><br/>
            </div>
        </div>
    )
}
