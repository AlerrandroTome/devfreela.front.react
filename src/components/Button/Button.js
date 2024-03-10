import styled from 'styled-components';
import { Button } from '@mui/material';

const ButtonPatternsStyled = styled(Button)`
    && {
        height: 40px;
        border-radius: 40px;
        text-transform: inherit;
        font-size: 14px;
        font-weight: bold;
    }
`;

ButtonPatternsStyled.defaultProps = {
    disableElevation: true,
    variant: "contained",
};

export default ButtonPatternsStyled;