import React, { useEffect, useState, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { forEach } from 'lodash';
import styled from 'styled-components';
import useSupercluster from "use-supercluster";
import useSwr from "swr";
import Marker from './components/Marker';
/*import Marker from './components/Marker';
*/
/*
let LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)*/


const defaultProps = {
    center: { lat: 44.3989295, lng: 8.9608709 },
    lat: 40.73,
    lng: -73.93,
    zoom: 12
}
/*
const fetcher = (...args) => fetch(...args).then(response => response.json());*/


function Map() {

    
   
/*    const mapRef = useRef();
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(10);

    const url = "https://liveapi.yext.com/v2/accounts/me/entities?api_key=78ca685caf1563020e7783efd96aef3f&v=20221017&entityTypes=healthcareFacility&savedFilterIds=1234994255";
    const {data, error} = useSwr(url, fetcher);
    const crimes = data && !error ? data.slice(0, 5) : [];
    const points = crimes.map(crime => ({
        type: "Feature",
        properties: { cluster: false, crimeId: crime.id, category: crime.category },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(crime.location.longitude),
                parseFloat(crime.location.latitude)
            ]
        }
    }));*/

    /*const [events, setEvents] = useState<any>([]);
    let markers:any = [];*/

     
   /* useEffect(() => {
        fetch("https://liveapi.yext.com/v2/accounts/me/entities?api_key=78ca685caf1563020e7783efd96aef3f&v=20221017&entityTypes=healthcareFacility&savedFilterIds=1234994255")
            .then(response => response.json())
            .then(data => {

                data = data.response.entities;
                Object.keys(data).forEach((index) => {
                 
                    markers.push({ "position": { "lat": data[index].geocodedCoordinate.latitude, "lng": data[index].geocodedCoordinate.longitude } })
                })
             
                setEvents(markers);
               
                

            });
    }, [])*/

    let punti = [
        { "position": { "lat": 44.3989295, "lng": 8.9608709 } },
        { "position": { "lat": 44.6966331, "lng": 10.622411 } },
        { "position": { "lat": 41.9089977, "lng": 12.4603334 } },
        { "position": { "lat": 43.786662, "lng": 11.2561061 } }
    ]


    const markerStyle = {
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -100%)"
      
    };



    /*const image =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";*/

    /*const center = new google.maps.LatLng(-33.712451, 150.311823);*/
   /* const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 9,
            center: center,
        }
    );*/

    const svgMarker = {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "blue",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(15, 30),
    };

  

    const MarkerCustom = {
        render() {
            new google.maps.Marker({
                position: punti.position,
                icon: svgMarker,
            });
        }
    }


    let LocationPin = ({ text }) => (
        <div className="pin">
            <MarkerCustom></MarkerCustom>
            <svg path={svgMarker.path} />
        </div>
    )
    return (
        <div>
            <ul>{punti.map((event, index) =>
                <li>{Object.entries(event.position)}</li>   
            )}
                               
                                     
            </ul>
           
            <div className="map">
                <div className="google-map" style={{ height: "100vh", width: "100%" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: import.meta.env.YEXT_PUBLIC_GOOGLE_API_KEY, language: 'it' }}
                        defaultZoom={10}
                        defaultCenter={defaultProps.center}
                    >
                      

                        {punti.map(item => {

                            return (
                                
                                <LocationPin
                                    lat={item.position.lat}
                                    lng={item.position.lat}                                   
                                />
                               
                            )
                        })}
                      

                    </GoogleMapReact>
                </div>
            </div>
        </div>

       
    )


}








/*
 * 
 * 
 * 
const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

const markers: any = [];

const defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    lat: 40.73,
    lng: -73.93,
    zoom: 12
}

function Map() {
 
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    async function getAddresses() {
        let response = await fetch("https://liveapi.yext.com/v2/accounts/me/entities?api_key=78ca685caf1563020e7783efd96aef3f&v=20221017&entityTypes=healthcareFacility&savedFilterIds=1234994255", requestOptions);
        let addresses = await response.json();
        let indirizzi = addresses.response;
        Object.keys(indirizzi.entities).forEach(async function () {
            let response = await indirizzi.entities[0].geocodedCoordinate;
            console.log(response);
            markers.push(response);
        })     
    }
   return (
        <div className="map">          
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: import.meta.env.YEXT_PUBLIC_GOOGLE_API_KEY, language: 'it' }}
                                 >
                   
                    {markers.map((markers: { latitude: any; longitude: any; }) => (
                        <LocationPin
                            lat={markers.latitude}
                            lng={markers.longitude}
                        //text={location.address}
                        />
                        
                    ))}
                    
                </GoogleMapReact>
            </div>
        </div>
    )
        
     
}*/

/*
const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: import.meta.env.YEXT_PUBLIC_GOOGLE_API_KEY, language: 'it' }}
                defaultCenter={location.center}
                defaultZoom={zoomLevel}
             
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    //text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)
*/
export default Map