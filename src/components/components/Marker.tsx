import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*const defaultMarkerIcon = (
    <svg
        width="30px"
        height="38px"
        viewBox="0 0 30 38"       
        xmlns="http://www.w3.org/2000/svg"
        fill= "red"
    >
        <g><path className="st1" d="M27.81,96.57c4.42,7.04,9.2,15.57,13.92,23.86c1.75,3.06,3.33,3.52,5.43-0.11c4.56-7.91,9.04-16.1,13.76-23.74 c14.33-23.19,37.78-45.8,19.13-77.01C63.49-8.14,18.45-5.18,4.98,20.62C-10.46,50.19,13.65,74.03,27.81,96.57L27.81,96.57z"></path>
        <path className="st0" d="M43.46,25.59c9.31,0,16.86,7.55,16.86,16.86s-7.55,16.86-16.86,16.86c-9.31,0-16.86-7.55-16.86-16.86 S34.15,25.59,43.46,25.59L43.46,25.59z"></path></g>
    </svg>
);*/

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 38px;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  transition: all .1s ease-in-out;
  &:hover {
    z-index: 9999;
  }
  &:hover svg {
    fill: rgb(0,64,92);
    scale: 1.1;
  }
`;


const Marker = ({ text, onClick, ordine }) => (    
    <Wrapper
        alt={text}
        onClick={onClick}
        className={"result-" + ordine}
    >
        <span style={{ color: "white", position: "absolute", zIndex: "1", fontSize: "14px", bottom: "88%"}}>{ordine + 1}</span>
        {/* <span style={{ color: "white", position: "absolute", zIndex: "1", fontSize: "14px", bottom: "88%" }}>0</span>*/}
        <div style={{ position: "absolute", bottom: "50%", width: "100%", height: "100%" }} ><svg fill="rgb(0, 141, 201)" stroke="white" stroke-width="5px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 90 125" xmlSpace="preserve" height="100%" width="100%">
            <g><path className="st1" d="M27.81,96.57c4.42,7.04,9.2,15.57,13.92,23.86c1.75,3.06,3.33,3.52,5.43-0.11c4.56-7.91,9.04-16.1,13.76-23.74 c14.33-23.19,37.78-45.8,19.13-77.01C63.49-8.14,18.45-5.18,4.98,20.62C-10.46,50.19,13.65,74.03,27.81,96.57L27.81,96.57z"></path></g></svg></div>
        {/*<img style={{ position: "absolute", bottom: "50%", width: "100%", height: "100%" }} src='data:image/svg+xml;utf8,<svg fill="rgb(0, 141, 201)" stroke="white" stroke-width="5px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 90 125" xml:space="preserve" height="100%" width="100%">
    <g><path className="st1" d="M27.81,96.57c4.42,7.04,9.2,15.57,13.92,23.86c1.75,3.06,3.33,3.52,5.43-0.11c4.56-7.91,9.04-16.1,13.76-23.74 c14.33-23.19,37.78-45.8,19.13-77.01C63.49-8.14,18.45-5.18,4.98,20.62C-10.46,50.19,13.65,74.03,27.81,96.57L27.81,96.57z"></path></g></svg>' alt="" />*/}
    </Wrapper>
);

Marker.defaultProps = {
    onClick: null,   
};

Marker.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    ordine: PropTypes.number
};

export default Marker;