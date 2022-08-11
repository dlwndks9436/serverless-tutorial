const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-northeast-2" });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.get(
  {
    TableName: "td_notes",
    Key: {
      
    }
  },
  (err, data) => {
    if (err) {
      console.log(`err: ${err}`);
    } else {
      console.log(`data: ${JSON.stringify(data)}`);
    }
  }
);
