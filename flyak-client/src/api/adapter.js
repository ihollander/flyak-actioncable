const adapter = (() => {
  const baseUrl = "http://localhost:3000/api/v1";
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const fetchAndParse = (url, options) =>
    fetch(url, options).then(r => {
      if (!r.ok) throw r.json();

      return r.json();
    });

  const login = () => fetchAndParse(`${baseUrl}/login`);

  const getFlights = () => fetchAndParse(`${baseUrl}/flights`);

  const getFlight = id => fetchAndParse(`${baseUrl}/flights/${id}`);

  const buyTicket = ticketData =>
    fetchAndParse(`${baseUrl}/tickets`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(ticketData)
    });

  return {
    login,
    getFlights,
    getFlight,
    buyTicket
  };
})();

export default adapter;
