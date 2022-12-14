import { PutItemOutput } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

import AWS from 'aws-sdk';

export default async function listDirectories ({
    }: {
    }): Promise<PutItemOutput> {
    const client: DocumentClient = new AWS.DynamoDB.DocumentClient({
        endpoint: new AWS.Endpoint("http://localhost:8000"),
        region: "local",
    });
    const TableName = "directory";
    
    const params = {
        TableName,
    };
    
    return client.scan(params).promise();
    }