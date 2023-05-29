// Define the shape elements
const shape = document.getElementById('shape');
const shapes = ['rectangle', 'circle', 'triangle'];
let currentShapeIndex = 0;

// Add click event listener to the shape element
shape.addEventListener('click', changeShape);

// Function to change the shape
function changeShape() {
  // Increment the shape index
  currentShapeIndex = (currentShapeIndex + 1) % shapes.length;

  // Set the new shape based on the index
  const newShape = shapes[currentShapeIndex];

  // Apply the new shape
  shape.style.borderRadius = '';

  if (newShape === 'rectangle') {
    shape.style.borderRadius = '';
    shape.style.backgroundColor = 'red';
  } else if (newShape === 'circle') {
    shape.style.borderRadius = '50%';
    shape.style.backgroundColor = 'blue';
  } else if (newShape === 'triangle') {
    shape.style.borderRadius = '';
    shape.style.backgroundColor = 'green';
    shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
  }
}
