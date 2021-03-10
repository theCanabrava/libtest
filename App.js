import React from 'react';
import {AuthStore} from './src/contexts/AuthContext'
import { RestrictedStore } from './src/contexts/RestrictedContext';
import NavigationRoot from './src/navigation/NavigationRoot';
import LoadApp from './src/startup/LoadApp';
import Updater from './src/startup/Updater';

const App =  () =>
(
    <AuthStore>
        <RestrictedStore>
            <Updater/>
            <LoadApp component={NavigationRoot}/>
        </RestrictedStore>
    </AuthStore>
)

export default App;