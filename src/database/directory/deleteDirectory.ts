import { PutItemOutput } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

import AWS from 'aws-sdk';

export default async function deleteDirectory ({
    id,
    }: {
    id: string;
    }): Promise<PutItemOutput> {
    const client: DocumentClient = new AWS.DynamoDB.DocumentClient({
        endpoint: new AWS.Endpoint("http://localhost:8000"),
        region: "local",
    });
    const TableName = "directory";
    
    const params = {
        TableName,
        Key: {
            id,
        },
    };
    
    return client.delete(params).promise();
    }