// locator.tsx

import * as React from "React";
import { GetPath, Template, TemplateProps, TemplateRenderProps } from "@yext/pages";
import { SearchHeadlessProvider } from "@yext/search-headless-react"; // New
/*
import React, { useRef, useState } from "react";
import { GetPath, Template, TemplateProps, TemplateRenderProps } from "@yext/pages";
import { provideHeadless, SearchHeadlessProvider } from "@yext/search-headless-react"; // New
import { config } from "../config";
import "../index.css";
import { FilterSearch, VerticalResults, ResultsCount } from "@yext/search-ui-react";
import { Coordinate, HealthcareFacility } from "../types/search/strutture_sanitarie";
import MapboxMap from "../components/MapboxMap";
import MapPin from "../components/MapPin";
import LocationCard from "../components/LocationCard";
import { Map, Marker, Coordinate as CoordinateType } from "../components/map";
import { MAP_MULTIPLE_LOCATIONS } from "../components/map/sampleData.js";
import Map_With_Multiple_Interactive_Markers from "../components/map/map.stories.js";
import { Map as MapType } from "@yext/components-tsx-maps";
*/
export const getPath: GetPath<TemplateProps> = () => {
    return `/locator`;
};


/*const searcher = provideHeadless(config); 
*/



const Locator: Template<TemplateRenderProps> = () => {
    return (
        <>
            <SearchHeadlessProvider // New
                experienceKey="turtlehead-tacos-locator" // This must match your experience key in Knowledge Graph
                locale="en" // Language Locale - this can vary depending on your language preference
                apiKey="<YOUR_API_KEY>" // We'll use an env var in the next step for this 
                verticalKey="locations" // Specifies your search vertical
                experienceVersion="PRODUCTION" // We'll use production for now
                sessionTrackingEnabled={true} // Determines usage of tracking
            >
                Locator goes here!
            </SearchHeadlessProvider> // New
        </>
    );
};

export default Locator;





/* MAPPA GOOGLE FUNZIONANTE */

/*

import React, { useRef, useState } from "react";
import {
    GetHeadConfig,
    GetPath,
    HeadConfig,
    Template,
    TemplateProps,
    TemplateRenderProps,
} from "@yext/pages";

import "../index.css";
import {
    SearchHeadlessProvider,
    provideHeadless,
} from "@yext/search-headless-react";
import {
    SearchBar,
    StandardCard,
    VerticalResults,
} from "@yext/search-ui-react";
import { Map, Marker, Coordinate as CoordinateType } from "../components/map";
import { MAP_MULTIPLE_LOCATIONS } from "../components/map/sampleData.js";
import Map_With_Multiple_Interactive_Markers from "../components/map/map.stories.js";
import { Map as MapType } from "@yext/components-tsx-maps";


export const getPath: GetPath<TemplateProps> = () => {
    return `/locator`;
};



const Locator: Template<TemplateRenderProps> = ({
   
}) => {
    const [selectedId, setSelectedId] = useState("");
    const [focusedId, setFocusedId] = useState("");
    const [hoveredId, setHoveredId] = useState("");

    return (
        <>
            <Map bounds={MAP_MULTIPLE_LOCATIONS.map((location) => location.coordinate)}
                clientKey="gme-yextinc"
            >
                {MAP_MULTIPLE_LOCATIONS.map((location, index) => (
                    <Marker
                        key={location.id}
                        coordinate={location.coordinate}
                        id={location.id}
                        onClick={(id) => setSelectedId(id)}
                        onFocus={(focused, id) => setFocusedId(focused ? id : "")}
                        onHover={(hovered, id) => setHoveredId(hovered ? id : "")}
                        zIndex={
                            location.id === selectedId
                                ? 1
                                : location.id === focusedId || location.id === hoveredId
                                    ? 2
                                    : 0
                        }
                    >
                        <svg
                            width={location.id === selectedId ? 40 : 30}
                            height={location.id === selectedId ? 50 : 38}
                            fill={location.id === selectedId ? "white" : "black"}
                            viewBox="0 0 30 38"
                        >
                            <path
                                x="50%"
                                y="40%"
                                d="M30 15.0882C30 23.4212 23.3333 30.7353 15 38C7.22222 31.2941 0 23.4212 0 15.0882C0 6.75523 6.71573 0 15 0C23.2843 0 30 6.75523 30 15.0882Z"
                                stroke={
                                    location.id === focusedId || location.id === hoveredId
                                        ? "white"
                                        : "none"
                                }
                            />
                            <text
                                x="50%"
                                y="40%"
                                fontSize="16px"
                                fontWeight="bold"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fill={location.id === selectedId ? "black" : "white"}
                            >
                                {index}
                            </text>
                        </svg>
                    </Marker>
                ))}
            </Map>
        </>
    );
}



export default Locator;  */
/* MAPPA GOOGLE FUNZIONANTE */