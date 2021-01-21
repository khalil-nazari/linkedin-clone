
import React, {forwardRef} from 'react'
import './Post.scss'; 
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { Avatar } from '@material-ui/core';



const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    console.log(photoUrl)
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <InputOptions Icon={ShareOutlinedIcon} color="gray" title="Share"/>
                <InputOptions Icon={SendOutlinedIcon} color="gray" title="Send"/>
            </div>
        </div>
    )
})

export default Post