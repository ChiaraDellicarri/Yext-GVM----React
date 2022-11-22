import React from "react";
import HeaderIndex, { Link } from "../components/header-index";
import "../index.css";/*
import "../types/index.ts";*/
import {
    Template,
    GetPath,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
    GetHeadConfig,
    HeadConfig,
} from "@yext/pages";
import Searchbox from "../components/SearchBox";
import Footer from "../components/footer";

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

const Index: Template<TemplateRenderProps> = ({ relativePrefixToRoot, path, document }) => {
    const {
        dm_directoryChildren
    } = document;
   
    const regioni: any = [];
    const strutture: any = [];

    const sortedRegioni = dm_directoryChildren.map((regione: any) => {
        regioni.push(regione);
        regioni.sort(function (a: any, b: any) {
            var a = a.name, b = b.name;
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        })
    });

    const sortedStrutture = dm_directoryChildren.map((entity: any) => {
        { entity.dm_directoryChildren.map((struttura: any) => strutture.push(struttura)) }
        strutture.sort(function (a: any, b: any) {
            var a = a.c_nomeStruttura, b = b.c_nomeStruttura;
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        })
    });

/*
    

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
    ));*/

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
                            {sortedStrutture}
                            <Searchbox defaultLocations={strutture}/>      
                    </div>
                    <div className="section" data-ya-scope="SectionListRegione">
                        <div className="container">
                            <div className="lista_regioni">
                                <h5 className="title_nearby">Ospedali GVM per Regione</h5>
                                <ul className="regioni-list">
                                {regioni.map(r => {
                                    return (
                                        <li data-ya-track={"CTAListRegione_" + r.name}><a href={r.slug} title={"Ospedali GVM in " + r.name}>{r.name}</a></li>
                                        )
                                }) }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100">
                        <div className="">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>         

        </>
    );
};


export default Index;
