import React from 'react';

const Home = () => {
  return (
    <div class="left">
        <h1>Modernist Demo Home Page</h1>
        <div>
          <p>This is the font-end component of a full-stack application that manages a large database for ncmodernist.org, a non-profit organization dedicated to documenting, preserving and promoting modern residential architecture.</p>
          <p>The purpose of this application is to give NC Modernist a more efficient way to manage the large amount of data that currently lives on their static website. Prior to undertaking this project, all of their records on houses lived directly on their website, and everytime a volunteer wanted to update a house, this was done by manually changing the html containing that record. The aim of this project is to simplify this process for all volunteers as well as better organize the data as the amount of current data will only continue to grow.</p>
          <p>The front-end component of this application contains a demo of how the new database and API will integrate with the current website. The client intended to have this information populate all of the houses for a given architect, as well as provide visitors with a map where they can view the locations of all of the houses on record. It also contains a login portal where volunteers will be able to go to add new information to the current database. Volunteers will be able to login to this portal, which will give them access to all current records available in a user-friendly format. From there, they will be able to add new records, as well as update current records without needing to manipulate the live website.</p>
        </div>
    </div>
  );
}

export default Home;


