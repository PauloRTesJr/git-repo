import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import { LoadingContext } from './contexts/LoadingContext';
import Loading from './shared/components/Loading';

function App () {
    const [isLoading, setIsLoading] = useState(false);

    let toggleLoading = (loading) => {
        setIsLoading(loading)
    };

    return (
        <div className="App">
            <LoadingContext.Provider value={{ loading: isLoading, toggle: toggleLoading }}>
                <HomeScreen />
                <Loading />
            </LoadingContext.Provider>
        </div>
    );
}

export default App;
