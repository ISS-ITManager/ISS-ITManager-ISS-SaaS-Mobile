import { useHistory } from 'react-router-dom';
// import { menuController } from '@ionic/core';

const useGoToPage = (url) => {
    const history = useHistory();
    const goToPage = (url) => {
        history.push(url);
    };
    return goToPage;
};

export default useGoToPage;
