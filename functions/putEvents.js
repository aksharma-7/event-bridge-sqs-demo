const EventBridge = require("aws-sdk/clients/eventbridge");

const { EventBusName } = process.env;

const eventBridge = new EventBridge();

const putEvents = async (e) => {
  try {
    let body = JSON.parse(e.body);
    const event = {
      EventBusName,
      Detail: JSON.stringify({
        vehicleNo: body.vehicleNo,
        NIC: body.nic,
      }),
      Source: "fuel-app",
      DetailType: "user-signup",
    };

    const res = await eventBridge.putEvents({ Entries: [event] }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { handler: putEvents };
