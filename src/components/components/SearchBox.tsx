import React, { Component } from 'react';
import styled from 'styled-components';


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.clearSearchBox = this.clearSearchBox.bind(this);
    }

    componentDidMount({ map, mapApi } = this.props) {
        this.searchBox = new mapApi.places.SearchBox(this.searchInput);
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
        this.searchBox.bindTo('bounds', map);
    }

    componentWillUnmount({ mapApi } = this.props) {
        mapApi.event.clearInstanceListeners(this.searchInput);
    }

    onPlacesChanged = ({ map, addplace } = this.props) => {
        const selected = this.searchBox.getPlaces();
        const { 0: place } = selected;
        if (!place.geometry) return;
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
            map.setZoom(9);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(6);
        }

        addplace(selected);
        this.searchInput.blur();
    };

    clearSearchBox() {
        this.searchInput.value = '';
    }

    render() {
        return (           
                <input id="location-input"
                    ref={(ref) => {
                        this.searchInput = ref;
                    }}
                    type="text"
                    className="bg-transparent w-full mx-2 focus:outline-none pac-target-input"
                    onFocus={this.clearSearchBox}
                    placeholder="Inserisci l'indirizzo o la città"
                />
            
        );
    }
}

export default SearchBox;