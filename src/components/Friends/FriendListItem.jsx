import PropTypes from 'prop-types';
import {FriendCard, Status, AvatarImg, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline }) => {
    return ( 
        <FriendCard>
            <Status status={isOnline}></Status>
            <AvatarImg src={avatar} alt="User avatar" />
            <FriendName>{name}</FriendName>
        </FriendCard>
    );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};