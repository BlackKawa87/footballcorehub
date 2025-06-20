export default async function handler(request, response) {
  const apiKey = process.env.VITE_API_FOOTBALL_KEY;
  if (apiKey) {
    try {
      const resp = await fetch('https://v3.football.api-sports.io/fixtures?next=5', {
        headers: { 'x-apisports-key': apiKey }
      });
      if (!resp.ok) throw new Error(`API error ${resp.status}`);
      const data = await resp.json();
      return response.status(200).json({ provider: 'api-sports', matches: data.response });
    } catch (err) {
      console.error(err);
    }
  }
  const fallback = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json');
  const data = await fallback.json();
  response.status(200).json({ provider: 'openfootball', matches: data.matches.slice(0, 5) });
}
