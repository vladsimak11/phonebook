import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  color: #f4a442;
`;

export const Input = styled.input`
  height: 25px;
  font: inherit;
  border: 2px solid #c1c1c1;
  padding: 5px 0px 5px 10px;
  outline: none;

  &:focus {
    border: 2px solid var(--light-green);
  }

`;

export const Button = styled.button`
  width: 150px;
  border: none;
  background-color: var(--light-green);
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  color: var(--white);
  border-radius: 10px;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateX(7px);
  }

`;