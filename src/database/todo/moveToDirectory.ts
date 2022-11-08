import { PutItemOutput } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

import AWS from 'aws-sdk';

export default async function moveTodoToDirectory ({
    id,
    directoryId,
    }: {
    id: string;
    directoryId: string;
    }): Promise<PutItemOutput> {
    const client: DocumentClient = new AWS.DynamoDB.DocumentClient({
        endpoint: new AWS.Endpoint("http://localhost:8000"),
        region: "local",
    });
    const TableName = "todo";
    
    const params = {
        TableName,
        Key: {
            id,
        },
        UpdateExpression: "set #directoryId = :directoryId",
        ExpressionAttributeNames: {
            "#directoryId": "directoryId",
        },
        ExpressionAttributeValues: {
            ":directoryId": directory
        },
    };
    return client.update(params).promise();
    }