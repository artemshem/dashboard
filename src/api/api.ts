export default class API {
  async getNews () {
    const url = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=f22bcc2fb9a54185b76491b9c353d894';
    return fetch(url)
      .then((response) => response.json())
  }

  //&seed=abv

  async getUsers (numberOfUsers: number) {
    const url = `https://randomuser.me/api/?page=1&results=${numberOfUsers}`;
    return fetch(url)
      .then((response) => response.json())
  }
}