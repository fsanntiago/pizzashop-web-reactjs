# PizzaShop Web Application

This repository contains a web application for a pizza shop, developed using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A fast and modern build tool.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Features

- View the pizza menu.
- Customize orders.
- Add items to the shopping cart.
- Complete orders.

## Requirements

- Run [API PizzaShop](https://github.com/fsanntiago/api-pizzashop-bun)
- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/fsanntiago/pizzashop-web-reactjs.git
    ```

2. Navigate to the project directory:
    ```sh
    cd pizzashop-web-reactjs
    ```

3. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
    or
    ```sh
    yarn dev
    ```

2. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Project Structure

- **public/**: Public files for the application.
- **src/**: Source code for the application.
  - **components/**: Reusable components.
  - **pages/**: Application pages.
  - **styles/**: Styling files.
  - **utils/**: Utilities and helpers.

## Additional Configuration

### ESLint

This project uses ESLint for code linting. Adjust the `.eslintrc.json` file as needed.

### Prettier

Prettier is configured for code formatting. Adjust the `prettier.config.cjs` file as needed.

## Contributing

1. Fork this repository.
2. Create a branch for your feature or bug fix:
    ```sh
    git checkout -b my-feature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add my new feature'
    ```
4. Push to the remote repository:
    ```sh
    git push origin my-feature
    ```
5. Open a pull request.
