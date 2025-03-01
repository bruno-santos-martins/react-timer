
import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 10px;
  border-radius: 4px;
  border: 0;
  //background-color: ${props => buttonVariants[props.variant]};
  background-color: ${props => props.theme["green-500"]};
  color: ${p => p.theme.white}
  /*
  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }}
    */
    
    
`;