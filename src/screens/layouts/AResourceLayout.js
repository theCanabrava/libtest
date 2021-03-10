import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import strings from '../strings';

const AResourceLayout = ({onClickBack}) =>
(
    <ScreenContainer>
        <Card>
            <Text>
                Conteudo exclusivo para usuário A, que não acessa APi
            </Text>
        </Card>
        <Card>
            <Button title={strings.BACK} onPress={onClickBack}/>
        </Card>
    </ScreenContainer>
)

AResourceLayout.propTypes =
{
    onClickBack: PropTypes.func.isRequired
}
export default AResourceLayout;