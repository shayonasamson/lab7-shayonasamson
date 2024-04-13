const apiURL = "https://660ded886ddfa2943b3573c8.mockapi.io/api/v1/albums";
async function appInit() {
  const res = await fetch(apiURL);
  const payload = await res.json();
  console.log(payload);
}

appInit();
