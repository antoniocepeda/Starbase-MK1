# Starbase Academy

A modern educational platform built with React, TypeScript, and Firebase.

## Project Structure

The project follows a feature-based organization:

```
project/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── features/
│   │   └── subscription/
│   │       ├── api/
│   │       ├── components/
│   │       └── hooks/
│   └── shared/
│       └── firebase/
├── functions/
└── public/
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up Firebase:
   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Firestore database
   - Enable Firebase Hosting
   - Enable Firebase Functions
   - Update the Firebase configuration in `src/shared/firebase/config.ts`

## Development

To run the application locally:

```
npm run dev:all
```

This will start both the React development server and Firebase emulators.

## Deployment

To deploy the application to Firebase:

1. Build the application:
   ```
   npm run build
   ```

2. Deploy to Firebase:
   ```
   npm run deploy:all
   ```

This will deploy both the Firebase Functions and the React application to Firebase Hosting.

Your application will be available at: `https://starbase-mk1.web.app`

## Features

- **Email Subscription**: Collect and store email addresses in Firestore
- **Firebase Authentication**: User authentication (coming soon)
- **Responsive Design**: Works on all device sizes

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Firebase Functions
- **Database**: Firestore
- **Hosting**: Firebase Hosting
