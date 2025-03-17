# Expense Tracker Application

This is a React-based Expense Tracker application that helps users manage their expenses efficiently. The app features an interactive interface with components for adding, viewing, editing, deleting, and summarizing expenses. Firebase is used to store expense data.

## Features
- **ExpenseForm**: Allows users to input new expenses.
- **ExpenseList**: Displays a list of recorded expenses.
- **ExpenseInfo**: Provides a summary of total expenses.
- **Transaction**: Manages and tracks transactions.
- **Edit and Delete Expenses**: Users can update or remove expenses.
- **Firebase Integration**: Stores expense data in Firebase for persistence.

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain Firebase configuration details.
   - Update `firebaseInit.js` with your Firebase credentials:
     ```js
     import { initializeApp } from "firebase/app";
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     const app = initializeApp(firebaseConfig);
     export default app;
     ```

4. **Run the Application**
   ```sh
   npm start
   ```

## Project Structure
```
Expense_Tracker-main/
│-- src/
│   ├── components/
│   │   ├── ExpenseForm/
│   │   ├── ExpenseList/
│   │   ├── ExpenseInfo/
│   │   ├── Transaction/
│   ├── firebaseInit.js
│   ├── App.js
│   ├── index.js
│-- public/
│-- package.json
│-- README.md
```

## Application Preview

![Expense Tracker UI](./src/images/ExpenseAppScreenshot.png)


## Contributing
Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.

