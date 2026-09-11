Dev Stack

Dev Stack is a simple and responsive web application where users can explore different development technologies and build their own technology stack.

Technologies Used:<br>
React.js
TypeScript
Tailwind CSS
Vite
React-Toastify
JSON
Main Features
Explore Technologies
Users can see different technologies with their name, category, description, difficulty level, and rating.
Build Your Stack
Users can add technologies to their own stack and remove them whenever they want.
Responsive Design
The website is responsive and works properly on desktop, tablet, and mobile devices.
React Questions & Answers
1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes writing and understanding the UI easier. We can write the structure of a component in a simple way using JSX.

2. What is the difference between props and state?

Props are used to send data from a parent component to a child component. Props are read-only.

State is data that belongs to a component and can change when the user interacts with the website.

For example, in this project, the selected technologies are stored in state.

3. What is the useState hook, and where did you use it?

useState is a React Hook that allows us to store and change data inside a component.

I used useState in the TechnologySection component to store:

Technology data
Selected technologies
Loading state

For example: <br>

const [stack, setStack] = useState<Technology[]>([]);

Here, stack stores the selected technologies and setStack is used to update them.

4. What is the useEffect hook, and why is it used for loading JSON data?

useEffect is a React Hook used to perform an action after a component renders.

In this project, I used useEffect in the TechnologySection component to load the technology data from the JSON file when the component starts.

Example: <br>

useEffect(() => {
  // Load technology data
}, []);

The empty [] means the effect runs when the component is first loaded.

5. Why is the key prop important when rendering lists?

The key prop gives each item in a list a unique identity.

React uses the key to understand which item has changed, been added, or removed.

In this project: <br>

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Here, technology.id is used as the unique key.

6. What is conditional rendering? Give an example.

Conditional rendering means showing different content depending on a condition.

For example, in this project, a loading message is shown while the technology data is loading.
<br>
{loading ? (
  <p>Loading technologies...</p>
) : (
  <TechnologyCard />
)}

If loading is true, the loading message is shown. Otherwise, the technology cards are shown.

7. How do you pass data from a parent component to a child component? How can a child component communicate with its parent?

A parent component can send data to a child component using props.

For example:<br>

<TechnologyCard
  technology={technology}
  isAdded={isAdded}
  onAdd={handleAddToStack}
/>

Here, the parent sends technology, isAdded, and onAdd to the TechnologyCard child component.

A child can communicate with its parent by using a callback function received through props.

For example:

onAdd(technology);

When the child calls onAdd, the function from the parent runs.

Project Structure<br>
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechnologySection.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
│
├── data/
│   └── technologies.json
│
├── types/
│   └── technology.ts
│
├── App.tsx
├── index.css
└── main.tsx
How to Run the Project

Install the dependencies:

npm install

Start the development server:

npm run dev

Then open the local URL provided by Vite in your browser.

Author

Dev Stack — React + TypeScript Project<br>
(Nobin)
