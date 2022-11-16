import React, {useLayoutEffect } from "react";
import PageLayout from "../components/page-layout";
import HeaderIndex, { Link } from "../components/header-index";
import GoogleMapCluster from "../components/GoogleMapCluster";
import GoogleCustomMap from "../components/GoogleCustomMap"
import "../index.css";/*
import "../types/index.ts";*/
import {
    Template,
    GetPath,
    GetRedirects,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
    GetHeadConfig,
    HeadConfig,
} from "@yext/pages";
import {
    SearchHeadlessProvider,
    provideHeadless, useSearchActions
} from "@yext/search-headless-react";
import {
    SearchBar,
    StandardCard,
    VerticalResults,
    VisualAutocompleteConfig,
    DropdownItem,
} from "@yext/search-ui-react";
import { useEffect, useState } from "react";
import Searchbox from "../components/SearchBox";

export const config: TemplateConfig = {
    stream: {
        $id: "ce_root",
        filter: {
            savedFilterIds: ["dm_health-v2"]
        },
        fields: [
            "id",
            "name",
            "slug",
            "dm_directoryChildren.name",
            "dm_directoryChildren.slug",
            "dm_directoryChildren.dm_directoryChildren.name",
            "dm_directoryChildren.dm_directoryChildren.c_nomeStruttura",
            "dm_directoryChildren.dm_directoryChildren.id",
            "dm_directoryChildren.dm_directoryChildren.slug",
            "dm_directoryChildren.dm_directoryChildren.address",
            "dm_directoryChildren.dm_directoryChildren.geocodedCoordinate",
            "dm_directoryChildren.dm_directoryChildren.hours"
        ],
        localization: {
            locales: ["it"],
            primary: false,
        },
    },
};


export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({ relativePrefixToRoot, path, document }): HeadConfig => {
    return {
        title: "Home Page",
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1",
        tags: [
            {
                type: "meta",
                attributes: {
                    description: "This is a description for the Turtlehead Tacos directory home page.",
                },
            },
            {
                type: "link",
                attributes: {
                    rel: "stylesheet",
                    href: "https://use.typekit.net/yfq1avx.css"
                },
            }
           
        ],
    };
};

const searcher = provideHeadless({
    apiKey: "dec78727a3b27e9374f795442592f899",
    experienceKey: "gvm-hospital-experience-key",
    verticalKey: "strutture_sanitarie",
    locale: "it",
});



const Index: Template<TemplateRenderProps> = ({ relativePrefixToRoot, path, document }) => {
    const {
        dm_directoryChildren
    } = document;
   

    var strutture: any = [];

    var sortedStrutture = dm_directoryChildren.map((entity: any) => {           
        { entity.dm_directoryChildren.map((struttura: any) => strutture.push(struttura))}      
        strutture.sort(function (a: any, b: any) {
            var a = a.c_nomeStruttura, b = b.c_nomeStruttura;
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        })        
    });

    const childrenDivsWithRegion = dm_directoryChildren.map((entity: any) => (
        <div>
            <div>
            <a key="uRL" href={relativePrefixToRoot + entity.slug} className="font-bold text-2xl text-blue-700 hover:underline">
                {entity.name}
            </a>
            </div>
            <div>
                {entity.dm_directoryChildren.map((struttura: any) => (
                    <p>
                        <a key="uRL" href={relativePrefixToRoot + entity.slug + struttura.slug} className="font-bold hover:underline">
                            {struttura.name} 
                        </a>
                        <div>
                            {struttura.address.line1} {struttura.address.line2} {struttura.address.postalCode} {struttura.address.city} {struttura.address.region}
                        </div>
                    </p>
                ))}
            </div>
        </div>
    ));

/*    const childrenDivs = strutture.map((struttura: any, index: number) => (

        <div id={"result-"+ index} className="result border selected" itemType="https://schema.org/MedicalClinic">
            <p>
                <a key="uRL" href={relativePrefixToRoot + struttura.slug} className="font-bold hover:underline">
                    {struttura.c_nomeStruttura}
                </a>
                <div>
                    {struttura.address.line1} {struttura.address.line2} {struttura.address.postalCode} {struttura.address.city} {struttura.address.region}
                </div>
            </p>
        </div>
    ));
*/
   
    

    return (
        <>
            <div className="flex min-h-screen w-full">
                <div className="w-full">
                    <div className="header sticky top-0">
                        <HeaderIndex
                            logo="https://www.gvmnet.it/App_Themes/GVMNet/images/gruppovillamaria_logo.png"
                        ></HeaderIndex>
                    </div>
                    <div className="w-full">
                            <Searchbox defaultLocations={strutture}/>      
                    </div>
                </div>
            </div>         

        </>
    );
};


export default Index;
