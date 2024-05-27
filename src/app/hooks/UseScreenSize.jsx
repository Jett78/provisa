import { useMediaQuery } from 'react-responsive';

const UseScreenSize = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
    return { isSmallScreen };
};

export default UseScreenSize;
