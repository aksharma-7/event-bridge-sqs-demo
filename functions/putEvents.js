const putEvents = async (event) => {
  let body = JSON.parse(event.body);
};

module.exports = { handler: putEvents };
