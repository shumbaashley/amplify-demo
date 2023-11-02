import { API } from 'aws-amplify';
import { useEffect } from 'react';

const TestAPI = () => {

    useEffect(() => {

        const apiName = 'demoapi12345';
        const path = '/items';
        const myInit = {
            headers: {}, // OPTIONAL
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {
                // name: 'param' // OPTIONAL
            }
        };

        API.get(apiName, path, myInit)
            .then((response) => {
                // Add your code here
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });

    }, [])





    return (
        <div>TestAPI</div>
    )
}

export default TestAPI