import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/'
import Beers from '../src/components/beers/'
import BeerList from '../src/components/beerList/'
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";
import BeerDetails from '../src/components/beerDetails/beerDetails'



const sample = {
  category: 'Ale',
  name: 'IPA',
  abv: "ABV: 6%",
  color: 'Color: Light yellow to amber',
  picture: {thumbnail: '/pictures/IPA.jpg'}
}

storiesOf("Beer List App/Header", module).add("default", () => (
    <Header noBeers={10} />
)); //first addition from header

storiesOf("Beer List App/Filter Controls", module).add("default", () => (
    <FilterControls onUserInput={action('Search criteria changes') }/>
)); //updated filter controls

storiesOf("Beer List App/Beers", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => ( 
   <Beers beers={sample} deleteHandler={action('Delete confirmed') }/>
));// Routing change to beers

storiesOf("Beer List App/Beer List", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <BeerList beers={samples}/>
}); //Routing change to beerList

storiesOf("Beer List App/Beer Page/Beer Page", module)
.add("default", () => ( 
   <BeerDetails user={sample}/>
));





