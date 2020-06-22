import {useState, useEffect} from 'react';
import axios from 'axios';

function Get(url) {
  const [response, setResponse] = useState({data: null, error: false});

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setResponse({data: response.data, error: false});
      }).catch(() => {
        setResponse({data: null, error: true});
      });
  }, [url]);

  return response;
}

export {Get};
