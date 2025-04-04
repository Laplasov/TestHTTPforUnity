exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Hello from Netlify HTTP server!',
  };
};
