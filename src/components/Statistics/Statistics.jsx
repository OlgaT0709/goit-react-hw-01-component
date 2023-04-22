import PropTypes from 'prop-types';
import { StatSection, Title, StatList, StatCard, Label, Percentage } from './Statistics.styled'
import getRandomHexColor from '../../utils/getrandomhexcolor'

export const Statistics = ({title , stats}) => {
    return (
        <StatSection>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatCard key={id} style={{backgroundColor: getRandomHexColor() }}>
                            <Label>{label}</Label>
                            <Percentage>{percentage}%</Percentage>
                        </StatCard>
                    );
                }          
                )}
            </StatList>
        </StatSection>
    );
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
  }),
    )
};