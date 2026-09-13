# Dev Stack

A modern and responsive web application that helps developers explore different technologies and build their own personalized development stack. Users can browse technology details, add technologies to their stack, and manage their selected technologies easily.

## 🚀 Technologies Used

- **React.js** — For building the user interface
- **TypeScript** — For type-safe development
- **Vite** — For fast development and building
- **Tailwind CSS** — For responsive and modern styling
- **React-Toastify** — For toast notifications
- **JSON** — For storing technology data

## ✨ Features

### 1. Explore Technologies

Browse different development technologies with information such as category, description, difficulty level, rating, and badge.

### 2. Build Your Own Stack

Add technologies to your personal stack, remove individual technologies, or remove all selected technologies at once. Duplicate technologies are also prevented.

### 3. Responsive & Interactive UI

The application works smoothly on desktop, tablet, and mobile devices. It also includes a mobile navigation menu, loading state, and toast notifications for user actions.

---

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes the UI code easier to read and write.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data managed inside a component that can change when the user interacts with the application.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and update data in a React component.

I used it in the `TechnologySection` component to manage the technology list, selected stack, and loading state. I also used it in the `Navbar` component to control the mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to run code after a component renders.

I used it in the `TechnologySection` component to load the technology data from the local JSON file when the component starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

It allows React to efficiently update the correct items when the list changes.

In this project, I used `technology.id` as the key for each technology card.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in the `YourStack` component. When the stack is empty, it shows **"Your stack is empty."** Otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

In this project, `TechnologySection` passes `technology`, `isAdded`, and `onAdd` to `TechnologyCard`.

The child sends something back to the parent by calling the callback function received through props. For example, `TechnologyCard` calls `onAdd(technology)` when the user clicks **Add to Stack**.