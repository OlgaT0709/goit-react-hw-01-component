import PropTypes from 'prop-types';
import {FriendList } from './FriendList.styled';
import {FriendListItem} from './FriendListItem';

export const FriendsList = ({friends }) => {
    return ( 
        <FriendList>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        
                    />
                    ))}
        </FriendList>

        );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
};