exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const body = event.body || '';
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `Echo: ${body}`,
  };
};
