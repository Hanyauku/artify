import React, { Component } from 'react';
import './css/Data.css';

export default class Data extends Component {
    render() {
        const { title, artistRole, artistDisplayName, artistDisplayBio, objectDate, geographyType, city, state, county, country, region, subregion, locale, locus, medium, dimensions, objectURL } = this.props.object;
        const geo = [];
        geo.push(city, state, county, country, region, subregion, locale, locus);
        const fgeo = geo.filter(val => val !== "").join(', ');

        return (
            <div className="info">
                <h3>{title}</h3>
                {artistRole ? <p>{artistRole}: {artistDisplayName} {artistDisplayBio ? `(${artistDisplayBio})` : null}</p> : null}
                {objectDate ? <p>Date: {objectDate}</p> : null}
                {fgeo.length > 0 ? <p>Geography: {geographyType} {fgeo}</p> : null}
                {medium ? <p>Medium: {medium}</p> : null}
                {dimensions ? <p className="end">Dimensions: {dimensions}</p> : null}
                <a href={objectURL} className="learn btn btn-outline-dark my-2 my-sm-0" target="_blank" rel="noopener noreferrer">Learn More About Object</a>
            </div>
        );
    }
}
