import React, { useState } from 'react';

const CSSLearningApp = () => {
  const [selectedTopic, setSelectedTopic] = useState('box-model');
  const [boxModelPadding, setBoxModelPadding] = useState(10);
  const [boxModelMargin, setBoxModelMargin] = useState(20);
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');

  const topics = [
    { id: 'box-model', name: 'Box Model' },
    { id: 'flexbox', name: 'Flexbox' },
  ];

  const CodeDisplay = ({ code }) => (
    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-4 shadow-lg w-full">
      <code>{code}</code>
    </pre>
  );

  const renderBoxModel = () => {
    const boxModelCode = `.box {
  width: 200px;
  height: 200px;
  padding: ${boxModelPadding}px;
  margin: ${boxModelMargin}px;
  border: 4px solid #3b82f6; /* blue-500 */
  background-color: lightblue;
}`;

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-4">Box Model</h3>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center w-1/2">
            <div
              className="border-4 border-blue-500 mb-8"
              style={{
                width: '200px',
                height: '200px',
                padding: `${boxModelPadding}px`,
                margin: `${boxModelMargin}px`,
                backgroundColor: 'lightblue',
              }}
            >
              <div className="w-full h-full bg-white border border-gray-300 flex items-center justify-center">
                Content
              </div>
            </div>
            <CodeDisplay code={boxModelCode} />
          </div>
          <div className="w-1/2">
            <label className="block mb-4">
              Padding:
              <input
                type="range"
                min="0"
                max="50"
                value={boxModelPadding}
                onChange={(e) => setBoxModelPadding(Number(e.target.value))}
                className="w-full"
              />
            </label>
            <label className="block mb-8">
              Margin:
              <input
                type="range"
                min="0"
                max="50"
                value={boxModelMargin}
                onChange={(e) => setBoxModelMargin(Number(e.target.value))}
                className="w-full"
              />
            </label>
          </div>
        </div>
        <div className="mt-8 max-w-4xl">
          <h4 className="font-semibold mb-2">Box Model Explanation</h4>
          <p>
            The box model is like a set of boxes wrapped around your HTML elements.
            Think of it as a present in a box. The content is the present itself.
            The padding is the bubble wrap around the present inside the box, keeping it safe.
            The border is the actual cardboard box. The margin is the space outside the box
            separating it from other boxes (other presents).
          </p>
          <h5 className="font-semibold mt-4">Parts of the Box Model</h5>
          <ul className="list-disc list-inside">
            <li><strong>Content:</strong> The actual content inside the box.</li>
            <li><strong>Padding:</strong> The space between the content and the border.</li>
            <li><strong>Border:</strong> The edge of the box surrounding the padding and content.</li>
            <li><strong>Margin:</strong> The space outside the border, separating this box from others.</li>
          </ul>
          <h5 className="font-semibold mt-4">Adjusting the Box Model</h5>
          <p>
            When you change the padding, you're adjusting the bubble wrap inside the box,
            making it thicker or thinner. Changing the margin adjusts the space outside
            the box, moving it closer to or further from other boxes.
          </p>
        </div>
      </div>
    );
  };

  const renderFlexbox = () => {
    const flexboxCode = `.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  height: 400px; /* Increased height */
  border: 4px solid #22c55e; /* green-500 */
  background-color: lightgreen;
}

.item {
  padding: 1rem;
  margin: 0.5rem;
  background-color: white;
  border: 1px solid #d1d5db; /* gray-300 */
}`;

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-4">Flexbox</h3>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center w-1/2">
            <div
              className="border-4 border-green-500 p-4 mb-8"
              style={{
                display: 'flex',
                flexDirection,
                justifyContent,
                alignItems,
                height: '400px',
                width: '400px', // Increased height
                backgroundColor: 'lightgreen',
              }}
            >
              <div className="bg-white border border-gray-300 p-4 m-2">Item 1</div>
              <div className="bg-white border border-gray-300 p-4 m-2">Item 2</div>
              <div className="bg-white border border-gray-300 p-4 m-2">Item 3</div>
            </div>
            <CodeDisplay code={flexboxCode} />
          </div>
          <div className="w-1/2 space-y-4">
            <label className="block">
              Flex Direction:
              <select
                value={flexDirection}
                onChange={(e) => setFlexDirection(e.target.value)}
                className="ml-2 p-1 border rounded"
              >
                <option value="row">Row</option>
                <option value="column">Column</option>
              </select>
            </label>
            <label className="block">
              Justify Content:
              <select
                value={justifyContent}
                onChange={(e) => setJustifyContent(e.target.value)}
                className="ml-2 p-1 border rounded"
              >
                <option value="flex-start">Flex Start</option>
                <option value="center">Center</option>
                <option value="flex-end">Flex End</option>
                <option value="space-between">Space Between</option>
              </select>
            </label>
            <label className="block mb-8">
              Align Items:
              <select
                value={alignItems}
                onChange={(e) => setAlignItems(e.target.value)}
                className="ml-2 p-1 border rounded"
              >
                <option value="stretch">Stretch</option>
                <option value="flex-start">Flex Start</option>
                <option value="center">Center</option>
                <option value="flex-end">Flex End</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mt-8 max-w-4xl">
          <h4 className="font-semibold mb-2">Flexbox Explanation</h4>
          <p>
            Flexbox is a way to arrange items in a container so that they can be
            flexible and adjust based on the available space. Think of it as a
            row or column of items that can stretch, shrink, and move around to
            fit the space.
          </p>
          <h5 className="font-semibold mt-4">Flexbox Properties</h5>
          <ul className="list-disc list-inside">
            <li><strong>Flex Direction:</strong> Decides if the items are arranged in a row (side by side) or in a column (stacked on top of each other).</li>
            <li><strong>Justify Content:</strong> Controls how the items are spaced out along the main axis (the direction they're arranged in).</li>
            <li><strong>Align Items:</strong> Controls how the items are spaced out along the cross axis (the direction perpendicular to the main axis).</li>
          </ul>
          <h5 className="font-semibold mt-4">Adjusting Flexbox Properties</h5>
          <p>
            By adjusting these properties, you can see how the items move and
            change their positions inside the container. 'Flex-direction' decides
            if the items are in a row or column. 'Justify-content' controls the
            spacing along the main axis. 'Align-items' controls the spacing along
            the cross axis.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">CSS Learning App</h2>
      <div className="mb-4 flex space-x-4">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic.id)}
            className={`px-4 py-2 rounded ${
              selectedTopic === topic.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {topic.name}
          </button>
        ))}
      </div>
      {selectedTopic === 'box-model' && renderBoxModel()}
      {selectedTopic === 'flexbox' && renderFlexbox()}
    </div>
  );
};

export default CSSLearningApp;
