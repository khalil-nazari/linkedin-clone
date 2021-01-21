/*
    Khalil Nazari 
    7 Jan 2020
*/


import React, { useState, useEffect }from 'react'
import './Feed.scss'; 
import InputOptions from './InputOptions.jsx';
import CreateIcon from '@material-ui/icons/Create';
import PanoramaIcon from '@material-ui/icons/Panorama';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from '../../Firebase/Firebase'; 
import firebase from 'firebase'
import { useSelector } from "react-redux";
import {selectUser} from '../../features/userSlice'
import FlipMove from 'react-flip-move';


const Feed = () => {
    // State
    const [posts, setPosts] = useState([]); 
    const [input, setInput] = useState(''); 
    const user = useSelector(selectUser)


    useEffect(() => {

        // fetch data from firestore
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot =>  setPosts (
                snapshot.docs.map(doc=> ({
                    id : doc.id, 
                    data: doc.data(),
                }))
            )
        );

    }, [])



    // Form submit
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName, 
            description: user.email, 
            message: input, 
            photoUrl: user.photoUrl ||'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }


    // JSX
    return (
        <div className="feed">
            {/* Input */}
            
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input 
                            type="text" 
                            value={input} 
                            onChange = { e => setInput(e.target.value) }
                        />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOptions Icon={PanoramaIcon} title="Photo" color='#70B5F9'/>
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color='#E7A33E'/>
                    <InputOptions Icon={EventNoteIcon} title="Event" color='#C0CBCD'/>
                    <InputOptions Icon={CalendarViewDayIcon} title="Write Article" color='#7FC15E'/>
                </div>
            </div>


            <FlipMove>
                {posts.map( ({id, data: { name, description, message, photoURL }}) =>(

                    <Post 
                        key={id} 
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoURL}
                    />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed
