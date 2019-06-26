function loadData(url1, url2) {
  Promise.all([fetch(url1), fetch(url2)])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(jsonData => {
      this.setState({
        todoData: jsonData[0],
        peopleData: jsonData[1]
      });
    });
}

export default loadData;
