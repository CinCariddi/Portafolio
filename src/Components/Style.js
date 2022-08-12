import styled from 'styled-components';

const colores = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  Black: '#000000',
  White: '#FFFFFF'
}
 
export const Button = styled.div`
    background-color: #9575cd;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    height: 5vh;
    display: flex;
    width: 10vw;
    align-items: center;
    justify-content: center;
    font-family: 'Amatic SC', cursive
`
export default colores
