import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        overflow-x: hidden; 
        font-family: 'Open Sans', sans-serif;
    }
    main {
        min-height: 100vh;
        background: #222831;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .glass {
        background: white;
        min-height: 85vh;
        max-height: 85vh;
        width: 85%;
        border-radius: 45px;
        background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
        z-index: 2;
        backdrop-filter: blur(1rem);
        display: flex;
        overflow: hidden;
    }
    .circle1, .circle2 {
        background: white;
        background: linear-gradient(to right bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.3));
        width: 20rem;
        height: 20rem;
        position: absolute;
        border-radius: 50%;
    }
    .circle1 {
        bottom: 4%;
        left: 3%;
    }
    .circle2 {
        top: 4%;
        right: 3%;
    }
`

export default GlobalStyle;