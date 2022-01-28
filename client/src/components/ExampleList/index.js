import React from 'react';

const ExampleList = ({
  examples
}) => {
  if (!examples.length) {
    return <h3>No Examples Yet</h3>;
  }

  return (
    <div>
      {examples &&
        examples.map((example) => (
          <div key={example._id} className="card mb-3">
            <div className="card-body bg-light p-2">
              <p>{example.exampleText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ExampleList;
