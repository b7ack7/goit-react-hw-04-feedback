import styled from '@emotion/styled';

export const Options = styled.div`
margin-bottom: 20px;
`;

export const OptionsButton = styled.button`
appearance: none;
border: 0;
border-radius: 4px;
background: #4676D7;
color: #fff;
padding: 8px 16px;
font-size: 16px;
text-transform: capitalize;
:not(:last-of-type) {
    margin-right: 10px;
}
:hover,
:focus {
    background: #1d49aa;
    outline: none;
}
`;
