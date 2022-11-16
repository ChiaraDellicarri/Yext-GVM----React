import {
    GetHeadConfig,
    GetPath,
    HeadConfig,
    Template,
    TemplateProps,
    TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
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
import searchConfig from "../config/searchConfig";

export const getPath: GetPath<TemplateProps> = () => {
    return "/search";
};

export const getHeadConfig: GetHeadConfig<
    TemplateRenderProps
> = (): HeadConfig => {
    return {
        title: "My Search Page",
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1",
    };
};

const searcher = provideHeadless({
    apiKey: "dec78727a3b27e9374f795442592f899",
    experienceKey: "gvm-hospital-experience-key",
    verticalKey: "strutture_sanitarie",
    locale: "it",
});

const Search: Template<TemplateRenderProps> = () => {
    return (
        <SearchHeadlessProvider searcher={searcher}>
            <div className="flex justify-center px-4 py-6">
                <div className="w-full max-w-5xl">
                    <SearchBar />
                    <VerticalResults CardComponent={StandardCard} />
                </div>
            </div>
        </SearchHeadlessProvider>
    );
};

export default Search;