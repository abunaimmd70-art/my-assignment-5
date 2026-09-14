# Dev Stack Builder

A simple and responsive React web application where anyone can explore different technologies and create their own custom development stack.

## 🔗 Project Links
- **Live Site:** [Your Live Link Here]
- **GitHub Repository:** [Your GitHub Repo Link Here]

---

## 🛠️ Technologies Used
- React.js
- Tailwind CSS
- Vite
- React-Toastify
- JSON

---

## 🌟 3 Main Features
1. **Add to Stack:** Users can add technologies to their sidebar list. The same technology cannot be added twice, and the button shows "Added" once selected.
2. **Remove Items:** Users can remove any specific item by clicking the (✕) button or clear everything with the "Remove All" button.
3. **Toast Alerts & Responsive:** Shows simple toast notifications for every action, and works smoothly on mobile, tablet, and desktop screens.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX is a syntax that allows us to write HTML tags directly inside JavaScript code. It is used because it makes building UI components much easier and simpler to read.

### 2. What is the difference between props and state?
**Answer:** 
- **Props:** Data passed from a parent component to a child component. Props are read-only and cannot be changed by the child.
- **State:** Data stored inside the component itself. State can change over time based on user interactions like button clicks.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` helps us store and update data inside a functional component. In this project, I used it to store the technology cards, the loading status, the selected stack list, and the mobile menu toggle.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` is used to run code when a component renders on the screen. I used it to load the data from the `technologies.json` file when the website first opens.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify each item in a list. It helps React quickly find out which item was added, changed, or removed without reloading the whole list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means showing different UI elements based on a condition (like if/else). 
- **Example:** In the "Your Stack" sidebar, if the stack is empty (`stack.length === 0`), it displays the "Your stack is empty" message. Otherwise, it displays the list of added cards.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** Data is passed down directly using **props**.
- **Child to Parent:** The parent passes a function through props to the child. When an event happens (like a button click in the child), the child calls that function to send data back to the parent.