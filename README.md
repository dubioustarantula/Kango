# Kango

> An open crowd-sourcing platform to fund struggling Animal shelters.

## Team

  - __Product Owner__: Thomas Treffry
  - __Scrum Master__: Julia Nething
  - __Development Team Members__: William Wung (Project Manager)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

How Kango Works:
> Individual users can browse local animal shelters that are need of monetary donations for food, healthcare, blankets, and general upkeep. Users can then sign up for an account and donate to the shelter(s) of their choice. Kango keeps track of how much each user donates and top donors for each animal shelter.

Stack:
> Kango uses the RRENS stack (ReFlux, React, Express, Node, and SQLite3).

Authentication:
> Kango uses Passport, OAuth, and Twitter to authenticate users. Users are able to sign up/sign in using either a local username and password or their Twitter account. Users can also connect their local login information with their Twitter account.

Database Requests:
> Kango uses Bookshelf and Knex to manage SQLite3 integration with the Express server. POST requests can be used to add data while GET requests can be used for lookup.

POST endpoints:
> /shelter?sheltername
sheltername is a unique, one word, username for the shelter that you are adding. Data should be sent as an object with the following data:
var shelter = {
	name: 'Full Name Of Shelter',
    image_url: 'www.imagelink.com',
    address_1: 'First line of address',
    address_2: 'second line of address',
    city: 'city name',
    state: 'state initials eg CA',
    zip: 'zip code as INT',
    email: 'shelter@email.com',
    telephone: 'phone number as INT',
    bio: 'Biography no length limit',
    goal: 'goal as INT'
}

> /donate
Adds new donation. Send data as object with the following data:
var donation = {
	donation: 'donation amount as INT',
	username: 'username of donator',
	sheltername: 'sheltername of receiving shelter'
}

GET endpoints:
> /shelters
Returns array of all shelters

> /shelters?sheltername
Returns single shelter

>/donations?sheltername
Returns list of all donations to that shelter sorted by donation amount

## Requirements

- Node 0.10.x
- Ruby 2.0.x
- SQLite 3

## Development

### Installing Dependencies

From within the root directory:

```sh
<!-- sudo npm install -g bower -->
npm install
<!-- bower install -->
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
