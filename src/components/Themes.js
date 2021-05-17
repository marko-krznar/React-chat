import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  header: "#3e90e3",
  button: "#fff",
  buttonColor: "#3e90e3",
  input:"#fcfcfc",
  inputText:"#000"
};

export const darkTheme = {
  body: "#2d2d2d",
  header: "#000",
  button: "#2d2d2d",
  buttonColor: "#fff",
  input: "#000",
  inputText:"#fff"
};

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