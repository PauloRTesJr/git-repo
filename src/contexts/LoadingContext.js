import React from 'react';

export const LoadingContext = React.createContext({
    isLoading: false,
    toggleLoading: () => { }
})