// Add this inside your component or in a shared styles file
import './tailwind.css';

// ...

// Inside your component
const TextSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black">
      <div className="inline-block animate-slide-left text-white font-bold">
        {/* Your sliding text goes here */}
        Notice 1: Important information goes here. Notice 2: Another important update for users. Notice 3: Exciting news about upcoming events. {/* Add more notices as needed */}
      </div>
    </div>
  );
};

export default TextSlider;
