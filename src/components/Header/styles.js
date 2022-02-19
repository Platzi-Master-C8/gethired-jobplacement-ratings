import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 900px) {
        flex-direction: row;
    }
`;
