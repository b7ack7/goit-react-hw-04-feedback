import PropTypes from 'prop-types';
import { Options, OptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
       <Options>
         {options.map(option => (
            <OptionsButton key={option} 
            type="button" 
            data-name={option} 
            onClick={onLeaveFeedback}>
                {option}
                </OptionsButton>
                ))}
       </Options>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}