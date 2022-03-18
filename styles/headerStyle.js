import { css } from '@emotion/react';

export const headerStyles = css`
  /* VARIABLES */
  :root {
    --linkPink: rgb(216, 29, 216);
    --linkPurple: rgb(98, 16, 250);
  }
  /* CSS RESET */
  /*
  1. Use a more-intuitive box-sizing model.
*/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /*
  2. Remove default margin
*/
  * {
    margin: 0;
  }
  /*
  3. Allow percentage-based heights in the application
*/
  html,
  body {
    height: 100%;
  }
  /*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
  6. Improve media defaults
*/
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  /*
  7. Remove built-in form typography styles
*/
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /*
  8. Avoid text overflows
*/
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /*
  9. Create a root stacking context
*/
  #root,
  #__next {
    isolation: isolate;
  }

  /* Custom CSS */
  * {
    font-family: 'Roboto', sans-serif;
  }

  a {
    position: relative;
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      height: 5px;
      right: 0px;
      bottom: -5px;
      left: 0px;
      background-color: var(--linkPink);
    }

    &:hover {
      color: var(--linkPink);

      &::before {
        background: linear-gradient(
          to right,
          var(--linkPink) 40%,
          var(--linkPurple) 75%
        );
      }
    }
  }

  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;

    margin-bottom: 4rem;
    height: 2.45rem;
    @media (min-width: 42em) {
      height: 3.35rem;
    }

    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
    }

    a {
      padding: 8px;
      padding-left: 1.75rem;
      font-size: 1.25rem;
      @media (min-width: 42em) {
        font-size: 2rem;
      }
    }
    button {
      height: 54px;
      width: 60px;
      border-top: none;
      border-right: none;
      padding-left: 12px;
      padding-right: 8px;
    }
    .headerImg {
      padding: 0.3rem;
      height: 2.45rem;

      @media (min-width: 42em) {
        height: 3.35rem;
      }
    }
    img {
      height: 100%;
      width: 100%;
      padding: 0;
      box-sizing: content-box;
    }
  }

  nav.flexbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (min-width: 600px) {
      justify-content: space-between;
    }

    > a {
      margin-bottom: 10px;

      @media (min-width: 600px) {
        margin-bottom: 0px;
      }
    }

    .fullwidth {
      flex: 0 0 100%;
      justify-content: center;

      @media (min-width: 600px) {
        flex: 0 1 auto;
      }
    }

    ul {
      display: flex;
      align-items: center;
    }

    ul li {
      flex: 0 0 100px;
      margin-right: 10px;
      text-align: center;

      @media (min-width: 600px) {
        flex: 0 0 auto;
        margin-right: 20px;
      }

      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;

export const headerLight = css`
  nav {
    background-color: rgba(255, 255, 255, 0.6);
    border-bottom: 2px black solid;
    box-shadow: 0px 10px 10px rgba(255, 255, 255, 0.6);

    a {
      border-left: 2px black solid;
      color: black;
    }

    button {
      border-left: 2px black solid;
      border-bottom: 2px black solid;
      background-color: rgba(255, 255, 255, 0);
      color: black;
    }

    .headerImg {
      border-right: 2px black solid;
    }
  }
`;

export const headerDark = css`
  nav {
    background-color: rgba(12, 12, 72, 0.6);
    border-bottom: 2px white solid;
    box-shadow: 0px 10px 10px rgba(12, 12, 72, 0.6);

    a {
      border-left: 2px white solid;
      color: white;
    }

    button {
      border-left: 2px white solid;
      border-bottom: 2px white solid;
      background-color: rgba(255, 255, 255, 0);
      color: white;
    }

    .headerImg {
      border-right: 2px white solid;
    }
  }
`;
