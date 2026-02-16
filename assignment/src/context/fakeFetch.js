const fakeFetch = () =>
  new Promise((resolve) => {
    setTimeout(() => {

      resolve({
        users: 1248,
        companies: 87,
        activeToday: 312,
        subscriptions: 540,
      });

    }, 1200);
  });


export default fakeFetch