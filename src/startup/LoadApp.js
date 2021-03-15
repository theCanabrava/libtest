import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Asset } from 'expo-asset';

export default ({component}) =>
{
    const [loading, setLoading] = useState(true);
    const auth = useContext(AuthContext);

    useEffect(() =>
    {
        const load = async () =>
        {
            await auth.load();
            try
            {
                await Asset.loadAsync([require('../../assets/images/red.png'), require('../../assets/images/blue/blue.png')]);
            }
            catch(err)
            {
                console.log(err);
            }
            setLoading(false);
        };

        load();
    }, [])

    if(loading) return null;
    else return React.createElement(component);
}