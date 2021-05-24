import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
    .col-header {
        background-color: ${(props) => props.theme.header};
    }
    .App-header button {
        background-color: ${(props) => props.theme.button};
        color: ${(props) => props.theme.buttonColor}; 
    }
    input, form {
        background: ${(props) => props.theme.input};
        color: ${(props) => props.theme.inputText};
    }
    input[type="text"]::placeholder {
        color: ${(props) => props.theme.inputText};
    }
`;