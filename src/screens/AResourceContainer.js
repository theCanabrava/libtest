import React from 'react';
import AResourceLayout from './layouts/AResourceLayout';
import NavigationProps from './proptypes/NavigationProps';

const AResourceContainer = ({navigation}) =>
(
    <AResourceLayout 
        onClickBack={() => navigation.goBack()}
    />
)

AResourceContainer.propTypes = NavigationProps;
export default AResourceContainer;