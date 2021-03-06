import React from 'react';
import { useSelector } from 'react-redux';

const CommentList = () => {

    const comments = useSelector(state => state.comments)

    const renderComments = () => {
        return comments.map(comment => {
            // We assume that every comment is unique
            return <li key={comment}>{comment}</li>
        });
    }

    return (
        <div>
            <ul>
                {renderComments()}
            </ul>
        </div>
    );
};

export default CommentList;
