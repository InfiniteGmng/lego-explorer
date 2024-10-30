# Lego Explorer

**Lego Explorer** is a Lego-themed web application that provides users with a central hub to explore, track, and learn about various Lego sets and collections. This website serves as a SaaS platform for Lego enthusiasts of all ages, whether they're casual builders, serious collectors, or anyone in between.

---

## About the Project

This project is a part of a multi-stage assignment focused on practical web application development. The Lego Explorer site will be developed using both front-end and back-end code, following RESTful principles, and eventually deployed on a popular cloud platform (such as AWS, Azure, or Google Cloud Platform). This README documents the structure and features of the website, along with how to set it up and test it locally.

---

## Features

- **Lego Set Database**: A comprehensive catalog of Lego sets, with detailed information on each set including name, theme, piece count, release year, and images.
- **User Collections**: Allows registered users to create a personal collection of Lego sets they own or wish to acquire, keeping track of their collections over time.
- **Search and Filter**: Powerful search and filtering options to find sets by themes (e.g., City, Star Wars, Technic), piece count, year, and other attributes.
- **RESTful API**: Provides a RESTful API for accessing Lego set data, allowing developers to interact programmatically with the site's database.
- **Interactive Visualizations**: Charts and statistics showing trends in Lego set releases, themes, and prices over the years.
- **User Authentication**: Secure login and registration for user-specific features, like adding sets to a wishlist or collection.
- **Community and Ratings**: User-generated reviews and ratings for each Lego set, helping the community find the best builds.

---

## Project Objectives

As part of this assignment, **Lego Explorer** aims to achieve the following learning objectives:

1. **Develop a RESTful API using Node.js**: The API will manage CRUD operations on Lego set records and user collections.
2. **Utilize Client-Side Scripting**: Leverage JavaScript to enhance interactivity on the client-side, allowing users to dynamically search and filter sets.
3. **Deploy on a Cloud Platform**: Implement deployment on a cloud provider (AWS, Azure, or GCP), making the service accessible to a global audience.
4. **Data Management with JSON and/or Database**: Store Lego data in a JSON file or a database, providing a robust data layer for the application.

---

## API Documentation

This project includes a documented API to provide external access to Lego set data. The API allows developers to:

- Retrieve lists of Lego sets
- Search for sets based on various criteria
- Add, update, or delete records in user collections (for authenticated users)

The API follows REST principles and is documented in Postman. The API documentation, including endpoint details and example requests, is published on Postman and linked below.

**[Postman API Documentation](#https://web.postman.co/workspace/5f218edc-aefe-4faa-a22e-3b4089def15c/documentation/38880162-72a22762-fcc6-40b5-8b52-4fe1a5ff10d1)**

---

## Getting Started

To set up this project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed
- **MySQL** if using a database (or Docker for easier setup)
- **Postman** for testing API endpoints

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/InfiniteGmng/lego-explorer.git
   cd lego-explorer
   ```

---
