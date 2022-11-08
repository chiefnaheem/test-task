import { PutItemOutput } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

import AWS from 'aws-sdk';

const client: DocumentClient = new AWS.DynamoDB.DocumentClient({
    endpoint: new AWS.Endpoint("http://localhost:8000"),
    region: "local",
});

const TableName = "todo";

//we want to have the create todo entity
export default async function createTodo ({
    id,
    name,
    description,
    directoryId,
    userId
    }: {
    id: string;
    name: string;
    description: string;
    directoryId: string;
    userId: string;
    }): Promise<PutItemOutput> {
    const params = {
        TableName,
        Item: {
            id,
            name,
            description,
            directoryId,
            userId,
        },
    };
    return client.put(params).promise();
}