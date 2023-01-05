import styled from 'styled-components';

export const colores = {
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
    text-decoration: none !important;
    display: inline-block;
    font-size: 16px;
    height: 5vh;
    display: flex;
    width: 10vw;
    align-items: center;
    justify-content: center;
    font-family: 'Amatic SC', cursive;
    margin:10px
`
export const Contenedor = styled.div`
  margin: 3%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
`

export const Contenido = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const ContenidoInterno = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Div = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  width: 100vw;
`