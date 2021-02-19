import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from '../../instances/graphql';
import ResultsList from '../../components/ResultsList';
import ResultsListPlaceholder from '../../components/ResultsListPlaceholder';

const Results = () => {
  const router = useRouter();
  const keywords = router.query?.search;

  const [ results, setResults ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetchData()
  }, [ keywords ]);

  const fetchData = async () => {
    if (!keywords) {
      return;
    }

    const requestBody = {
      query: `
        query {
          getProductsByTag(keywords: "${keywords}") {
            _id
            title
            price {
              currency
              amount
              decimals
            }
            condition
            free_shipping
            pictures {
              _id
              description
              name
              img {
                data
                contentType
              }
            }
          }
        }
      `
    };

    try {
      setIsFetching(true);
      const { status, data: { errors, data: responseData } } = await axios.post('', JSON.stringify(requestBody));

      if((status !== 200 && status !== 201)) {
        throw new Error('GraphQL Failed!');
      }

      if (errors) {
        console.log('Errors', errors);
      } else {
        setResults(responseData.getProductsByTag);
        setIsFetching(false);
      }
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  const renderContent = () => {
    if (isFetching) {
      return <ResultsListPlaceholder />
    } else if (error) {
      return <p>Error: {error}</p>
    }

    return (
    <ResultsList
      items={results}
      keywords={keywords} />);
  }

  return renderContent();
};

export default Results;
