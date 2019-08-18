import React, { useState } from 'react';
import './App.scss';
import HomeScreen from './screens/HomeScreen';
import { LoadingContext } from './contexts/LoadingContext';
import Loading from './shared/components/Loading';

function App () {
    const [isLoading, setIsLoading] = useState(false);

    let toggleLoading = () => {
        setIsLoading(!isLoading)
    };

    return (
        <div className="App">
            <LoadingContext.Provider value={{ isLoading: isLoading, toggleLoading: toggleLoading }}>
                <div className="container">
                    <HomeScreen />
                </div>
                <Loading loading={isLoading} />
            </LoadingContext.Provider>
        </div>
    );
}

export default App;
