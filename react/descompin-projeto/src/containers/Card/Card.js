import { Card } from '../../components/card/Card';
import { useAppContext } from '../../store/AppContext';
import { openModalSavePinAction } from '../../store/actions';

export const CardContainer = (props) => {
    const { state , dispatch } = useAppContext();

    const handleClick = (pinId) => { 
        console.log('Clicou', pinId);
        dispatch(openModalSavePinAction(pinId))
    }
    return (
        <Card {...props} onClick={handleClick} />
    )
}