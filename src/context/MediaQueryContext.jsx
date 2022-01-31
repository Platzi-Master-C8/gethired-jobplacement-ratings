import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../hooks/useMediaQuery';

const MediaQueryContext = createContext();

export const useMediaQueryContext = () => {
    const context = useContext(MediaQueryContext);

    if (context === undefined) {
        throw new Error('useMediaQueryContext must be use inside of its Provider');
    }

    return context;
};

const MediaQueyProvider = ({ children }) => {
    const small = useMediaQuery('(max-width: 480px)');
    const medium = useMediaQuery('(max-width: 900px)');

    const contextValue = useMemo(
        () => ({
            small,
            medium,
        }),
        [small, medium],
    );

    return <MediaQueryContext.Provider value={contextValue}>{children}</MediaQueryContext.Provider>;
};

MediaQueyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MediaQueyProvider;
