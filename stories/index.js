import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/'
import Beers from '../src/components/Beers/'
import BeerList from '../src/components/beerList/'


const sample = {
  category: 'Ale',
  style: 'IPA',
  abv: 6,
  color: 'Light yellow to Amber',
  picture: {thumbnail: '../src/pictures/IPA.jpg'}
}

storiesOf("Beer List App/Header", module).add("default", () => (
    <Header noBeers={10} />
  )); //first addition from header

storiesOf("Beer List App/Filter Controls", module).add("default", () => (
    <FilterControls />
  )); //second addition for filter controls

storiesOf("Beer List App/Beers", module).add("default", () => ( 
    <Beers beers={sample}/>
  )); 

storiesOf("Beer List App/Beer List", module).add("default", () => { 
    const samples = [sample, sample, sample, sample, sample]
    return <BeerList beers={samples}/>
  });





