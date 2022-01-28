import React from 'react';
import { useQuery } from '@apollo/client';

import ExampleList from '../components/ExampleList';
import ExampleForm from '../components/ExampleForm';

import { QUERY_EXAMPLES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_EXAMPLES);
  const examples = data?.examples || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ExampleForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ExampleList
              examples={examples}
              title="Some Feed for Example(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
