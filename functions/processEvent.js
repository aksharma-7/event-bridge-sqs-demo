const putEvents = async (event) => {
  const batchItemFailures = [];
  let messageId;
  try {
    let records = event.Records;
    if (records.length) {
      for (const record of records) {
        messageId = record.messageId;
        const parsedBody = JSON.parse(record.body);
        console.log(parsedBody);
        console.log("process vehicle details " + parsedBody.detail.vehicleNo);
        console.log("processing is successful", record.messageId);
      }
    }
  } catch (error) {
    console.log(error);
    batchItemFailures.push({
      itemIdentifier: messageId,
    });
  }
  return { batchItemFailures };
};

module.exports = { handler: putEvents };
