import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_EXAMPLE } from '../../utils/mutations';
import { QUERY_EXAMPLES } from '../../utils/queries';

import Auth from '../../utils/auth';

const ExampleForm = () => {
  const [exampleText, setExampleText] = useState('');

  const [addExample, { error }] = useMutation(ADD_EXAMPLE, {
    update(cache, { data: { addExample } }) {
      try {
        const { examples } = cache.readQuery({ query: QUERY_EXAMPLES });

        cache.writeQuery({
          query: QUERY_EXAMPLES,
          data: { examples: [addExample, ...examples] },
        });
      } catch (e) {
        console.error(e);
      }

    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExample({
        variables: {
          exampleText
        },
      });

      setExampleText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setExampleText(value);

  };

  return (
    <div>
      <h3>Examples?</h3>
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="exampleText"
                placeholder="Here's a new example..."
                value={exampleText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Example
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
    </div>
  );
};

export default ExampleForm;
