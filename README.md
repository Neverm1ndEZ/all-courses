# Cards React Component

The `Cards` component is a React component that displays a horizontal scrollable
list of cards. Each card represents a course or topic with an image, title,
description, and duration. The component uses various libraries and features to
enable smooth scrolling and parallax tilt effects for the cards.

## Dependencies

The component relies on the following dependencies:

- `react`: A JavaScript library for building user interfaces.
- `react-parallax-tilt`: A library to create a parallax tilt effect on elements.
- `react-aos`: A library for animating elements on scroll.
- `aos`: The CSS library used by `react-aos` for animations.
- `aos/dist/aos.css`: The CSS styles for animations used by `react-aos`.

## Installation

To use the `Cards` component in your React application, you need to install the
required dependencies:

```bash
npm install react react-parallax-tilt react-aos
```

Also, make sure to include the `aos.css` file in your project, either by
importing it in your main CSS file or by adding it as a link in your HTML file.

## Usage

To use the `Cards` component in your application, import it and render it within
your parent component:

```jsx
import React from "react";
import Cards from "./Cards";

const App = () => {
	return (
		<div>
			{/* Your other components */}
			<Cards />
		</div>
	);
};

export default App;
```

## Features

The `Cards` component has the following features:

1. Horizontal Scrolling: The cards are displayed in a horizontal layout, and the
   user can scroll through them left or right using the mouse wheel or touch
   gestures.

2. Parallax Tilt Effect: The `react-parallax-tilt` library is used to create a
   subtle parallax tilt effect on the cards, adding a sense of depth and
   interactivity to the UI.

3. Smooth Scrolling: The component enables smooth scrolling behavior by
   utilizing the `scrollBehavior: "smooth"` CSS property.

4. Scroll Animations: The `react-aos` library is used to animate the appearance
   of the cards on scroll. When the cards enter the viewport, they will animate
   into view with a flip animation.

5. Hide Scrollbar: The component hides the scrollbar by applying CSS styles for
   both Firefox and Webkit browsers, giving the UI a cleaner look.

## Event Handlers

The component includes several event handlers to enable scrolling and touch
functionality:

- `handleScroll`: Handles the scroll event and adjusts the horizontal scroll
  position based on the mouse wheel movement.

- `handleTouchStart`: Records the starting position of touch when a touch event
  begins.

- `handleTouchMove`: Calculates the touch delta and adjusts the horizontal
  scroll position based on touch movement.

- `handleTouchEnd`: Resets the touch starting position when the touch event
  ends.

- `handleMouseEnter`: Shows the scrollbar when the mouse enters the scrollable
  container.

- `handleMouseLeave`: Hides the scrollbar when the mouse leaves the scrollable
  container.

## Cleanup

The component sets up event listeners for scrolling and touch events using
`useEffect`. It also initializes the `aos` library when the component mounts. To
ensure proper cleanup and prevent memory leaks, the component removes these
event listeners and the `aos` initialization on unmount.

## Styles

The component applies some global styles using `styled-jsx` for hiding the
scrollbar and adjusting padding. Additionally, it uses inline styles to set the
`scrollBehavior` and `scrollSnapType` properties to enable smooth scrolling and
horizontal snapping of the cards.
