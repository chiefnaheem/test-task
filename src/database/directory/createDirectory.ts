import { PutItemOutput } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

import AWS from 'aws-sdk';

const client: DocumentClient = new AWS.DynamoDB.DocumentClient({
  endpoint: new AWS.Endpoint("http://localhost:8000"),
  region: "local",
});

const TableName = "directory";

//we want to have the create directory entity
export default async function createDirectory ({
  id,
  name,
  parentId,
  userId,
}: {
  id: string;
  name: string;
  parentId: string;
  userId: string;
}): Promise<PutItemOutput> {
  const params = {
    TableName,
    Item: {
      id,
      name,
      parentId,
      userId,
    },
  };

  return client.put(params).promise();
};