```javascript
//In your main app.js file
import 'tailwindcss/tailwind.css';

//Then in your component file
function MyComponent() {
  return (
    <div className="bg-red-500 p-4 rounded-lg">
      <p>This is a Tailwind CSS component</p>
    </div>
  );
}
//Ensure your tailwind.config.js is correctly configured to include the correct content and purge unused classes for production builds.
```