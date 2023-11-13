# Laravel + Vue Project with Vite - Setup Guide

This README provides step-by-step instructions for setting up a Laravel + Vue project powered by Vite.

## Prerequisites

Before you begin, make sure you have the following installed:

- PHP (>= 7.4)
- Composer
- Node.js (>= 14)
- NPM or Yarn
- Laravel CLI

## Getting Started

1. **Clone the GitHub repository:**

   ```bash
   git clone https://github.com/omohemma/propel-assessment-task.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd propel-assessment-task
   ```

3. **Install Laravel dependencies:**

   ```bash
   composer install
   ```

4. **Install Node.js dependencies:**

   ```bash
   npm install
   ```

5.  **Run Laravel development server:**

    ```bash
    php artisan serve
    ```

    Open your browser and visit `http://localhost:8000`. You should see your Laravel application with the Vue app integrated.

6.  **Run Vite development server:**

    In a separate terminal window, navigate to the Vue app directory and run:

    ```bash
    cd my-vue-app
    npm install
    npm run dev
    ```

    Your Vue app should now be available at `http://localhost:3000`.


