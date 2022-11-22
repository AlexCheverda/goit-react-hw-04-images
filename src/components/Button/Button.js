import PropTypes from 'prop-types';
import { LoadButton } from './Button.Styled';

const Button = ({ loadMore }) => {
    return (
        <LoadButton type="button" onClick={loadMore}>
            Load more
        </LoadButton>
    );
};

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
};

export default Button;