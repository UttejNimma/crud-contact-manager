# Contact Management App with Charts and Maps

This contact management application was developed with TailwindCSS, JavaScript, ReactJS, React Router v6, and Redux. The application facilitates contact management and offers COVID-19 data visualization across several nations using charts and maps.

## Deployed Link

You can access the app live at [Contact Management App]().

## Pages and Functionality

### contact

You may manage your contacts on the "Contacts" page. It has the following features available:

**Add Contact:** To add a new contact, complete the attached form. The contact will show up in the list after it is added.

- **Edit Contact:** By selecting the "Edit" button next to the contact's name, you can make changes to an already-existing contact. This enables you to modify the contact's details.

- **Delete Contact:** By selecting the "Delete" button next to a contact's name, you can take that contact out of your list.

**See Contact Information:** You can view more details about a contact by clicking on their name, which will take you to their contact details page.

### Charts and Maps

The "Charts and Maps" page displays COVID-19 data for various countries. It offers the following features:

- **Line Graph:** A line graph presents the fluctuation of COVID-19 cases over time. You can view the trend for different data points.

- **Interactive Map:** An interactive map shows markers for different countries. When you click on a marker, a popup appears with details about the selected country, including the total number of active cases, recovered cases, and deaths.

## APIs Used

The app fetches data from the following APIs:

- Worldwide COVID-19 Data: [Disease.sh - Worldwide Data](https://disease.sh/v3/covid-19/all)

- Country-Specific COVID-19 Data: [Disease.sh - Country Data](https://disease.sh/v3/covid-19/countries)

- Historical COVID-19 Graph Data: [Disease.sh - Historical Data](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## Technologies Used

The following technologies were used in the development of this app:

- ReactJS: An interface building JavaScript library.

- TypeScript: The main programming language used to create the functionality of the app.

- TailwindCSS: An app's styling framework built with utilities in mind.

- React Router v6: An application routing library that manages navigation.

- React Query: A React application library for data fetching and caching.

- Redux: A state management library for controlling the overall state of an application.

## Installation and Setup

To run this app locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/contact-management-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd contact-management-app
   ```

3. Install the app's dependencies:

   ```bash
   npm install
   ```

4. Start the app:

   ```bash
   npm start
   ```

The app should open in your default web browser at http://localhost:3000/.
