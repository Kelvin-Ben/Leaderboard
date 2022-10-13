export default async (playerName, playerScore, gameId) => {
  const data = {
    user: playerName,
    score: playerScore,
  };

  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
};