import PropTypes from 'prop-types';
import {ProfileCard, Description, AvatarImg, Name, Info, StatsContainer, Stat, Label, Quantity } from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <ProfileCard>
            <Description>
                <AvatarImg src={avatar} alt="User avatar"/>
                <Name>{username}</Name>
                <Info>@{tag}</Info>
                <Info>{location}</Info>
            </Description>
            <StatsContainer>
                <Stat>
                    <Label>followers</Label>
                    <Quantity>{followers}</Quantity>
                </Stat>
                <Stat>
                    <Label>views</Label>
                    <Quantity>{views}</Quantity>
                </Stat>
                <Stat>
                    <Label>likes</Label>
                    <Quantity>{likes}</Quantity>
                </Stat>
            </StatsContainer>

        </ProfileCard>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.any.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    // stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    // }),
    
};