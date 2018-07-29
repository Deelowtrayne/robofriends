import React from 'react';

const Card = ({ id, username, email }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2">

        	<img alt="Robot" src={`https://robohash.org/${id}?200x200`}/>
            <h3>{username}</h3>
            <p>{email}</p>
        </div>
    );
}

export default Card;
