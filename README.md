# Infinite Scroll App - React Native & Web

This project demonstrates a high-performance **infinite scrolling list** that fetches data dynamically from an API, using **React Hooks**, **Redux**, **memoization**, and **virtualization**. It includes a **React Native CLI** mobile app and a **React Web** app built with **Vite** (or **Next.js**) as the framework.

## Project Structure

This project consists of three main folders:

1. **common**: Contains shared business logic, hooks, and Redux actions/reducers for both the mobile and web apps.
2. **mobile**: A React Native app built with **React Native CLI**, designed to run on mobile devices.
3. **web**: A React app built using **Vite** for the web.

Each app (mobile and web) imports and utilizes shared logic from the `common` folder to ensure consistency and maintainability across platforms.

## Features

- **Infinite Scrolling**: Uses virtualization to render a large list of items fetched dynamically from an API (via **jsonplaceholder**).
- **React Hooks**: State management, API calls, and memoization are done using React hooks.
- **Redux**: Global state management for handling app data like fetching lists and managing scroll positions.
- **Cross-Platform**: Code is shared between mobile (React Native CLI) and web, with platform-specific logic and components.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Native CLI**: For building the mobile application.
- **Vite**: A fast and lightweight build tool for the web app.
- **React Hook**: For managing component lifecycle and fetching data.
- **jsonplaceholder**: A free fake REST API used to provide mock data for the list.

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** or **yarn**
- **React Native CLI** (for mobile development)
- **Xcode** or **Android Studio** (for mobile app development)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/infinite-scroll-app.git
cd infinite-scroll-app
```


### 2. Install Dependencies
This project has two main parts: the web app and the mobile app. You need to install dependencies for both.

# Web (React App):
Navigate to the web folder:
```bash
cd web
npm install
```


# Mobile (React Native App):
Navigate to the mobile folder:
```bash
cd mobile
npm install
```

# Running the App
##### Run the Web App (Vite)
In the web folder, run the following command to start the development server:

```
npm run dev
```

Open your browser and navigate to http://localhost:3000 to view the web app.

##### Run the Mobile App (React Native CLI)
In the mobile folder, run the following command to start the app on your device/emulator:
npx react-native run-android  # For Android
##### OR
npx react-native run-ios      # For iOS (macOS only)
The app will launch on your mobile device or emulator.

