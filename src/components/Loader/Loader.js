import { LineWave } from 'react-loader-spinner';
import { LoadingSpinner } from './Loader.Styled';

const Loader = () => {
    return (
        <LoadingSpinner>
            <LineWave height="100" width="100" color="#a2c893" ariaLabel="loading" />
        </LoadingSpinner>
    );
};

export default Loader;