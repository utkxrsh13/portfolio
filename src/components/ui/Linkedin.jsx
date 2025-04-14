import React from 'react';
import styled from 'styled-components';

const Button = () => {
  const handleClick = () => {
    window.location.href = "https://www.linkedin.com/in/utkxrsh13"; // Replace with your LinkedIn profile link
  };
  return (
    <StyledWrapper>
      <div className="light-button">
        <button className="bt" onClick={handleClick}>
          <div className="light-holder">
            <div className="dot" />
            <div className="light" />
          </div>
          <div className="button-holder">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.25h-3v-5.5c0-1.381-.112-2.623-2-2.623-1.887 0-2.171 1.146-2.171 2.537v5.586h-3v-11h2.842v1.522h.034c.396-.745 1.35-1.522 2.807-1.522 3.034 0 3.621 1.988 3.621 4.577v6.423z" />
            </svg>
            <p>LinkedIn</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .light-button button.bt {
    position: relative;
    height: 100px;
    display: flex;
    align-items: flex-end;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .light-button button.bt .button-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: #0f0f0f;
    font-weight: 700;
    transition: 300ms;
    outline: #0f0f0f 2px solid;
    outline-offset: 20;
  }

  .light-button button.bt .button-holder svg {
    height: 50px;
    fill: #0f0f0f;
    transition: 300ms;
  }

  .light-button button.bt .light-holder {
    position: absolute;
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light-button button.bt .light-holder .dot {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
  }

  .light-button button.bt .light-holder .light {
    position: absolute;
    top: 0;
    width: 200px;
    height: 100px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
  }

  .light-button button.bt:hover .button-holder svg {
    fill: rgba(0, 119, 181, 1); /* LinkedIn blue */
  }

  .light-button button.bt:hover .button-holder {
    color: rgba(0, 119, 181, 1); /* LinkedIn blue */
    outline: rgba(0, 119, 181, 1) 2px solid;
    outline-offset: 2px;
  }

  .light-button button.bt:hover .light-holder .light {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(0, 119, 181, 1) 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }`;

export default Button;
