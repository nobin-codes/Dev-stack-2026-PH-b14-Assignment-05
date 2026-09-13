Dev Stack

A simple and responsive web application for exploring development technologies and building a personalized technology stack.

🚀 Technologies Used
React.js
TypeScript
Tailwind CSS
Vite
React-Toastify
JSON
✨ Features
1. Explore Technologies

Explore different development technologies with useful information such as their category, description, difficulty level, rating, and badge.

2. Build Your Own Stack

Add technologies to your personal stack and manage them easily. Duplicate technologies are prevented, and selected technologies can be removed individually or all at once.

3. Responsive & Interactive Design

The application provides a clean and responsive interface for desktop, tablet, and mobile devices. Toast notifications give users feedback when they add, remove, or try to add a duplicate technology.

📚 React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It is used in React because it makes the UI structure easier to read and write.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is data managed inside a component that can change when the user interacts with the application.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to store and update data in a React component.

I used it in the TechnologySection component to manage the technologies, selected stack, and loading state.

Example:

const [stack, setStack] = useState<Technology[]>([]);
4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to run code after a component renders.

I used it in the TechnologySection component to load the technology data from the JSON file when the component starts.

Example:

useEffect(() => {
  // Load technology data
}, []);
5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list.

It helps React efficiently update the correct items when the list changes.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the YourStack component to show an empty stack message when no technology has been selected.

Example:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through props.

In this project, TechnologySection passes the technology data and the onAdd function to TechnologyCard.

Example:

<TechnologyCard
  technology={technology}
  isAdded={isAdded}
  onAdd={handleAddToStack}
/>

The child sends something back to the parent by calling the callback function received through props.

Example:

onAdd(technology);

This calls the handleAddToStack function in the parent component.
