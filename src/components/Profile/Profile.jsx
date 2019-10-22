import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div>Main content
            < ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;