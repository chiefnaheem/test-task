import { PutItemOutput } from 'aws-sdk/clients/dynamodb';
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

import AWS from 'aws-sdk';

const client: DocumentClient = new AWS.DynamoDB.DocumentClient({
    endpoint: new AWS.Endpoint("http://localhost:8000"),
    region: "local",
});

const TableName = "todo";

//Classical "todo" sample app with directories. As a user, you create directory, create todo item in it, mark it as done/not done. Remove directory with items/directories inside. List directories, list todo items with pagination by directory and/or status.

// - Create, list directories.
// - Remove directory with all items inside or sub directories & items inside.
// - Create new todo item with some title and status of not done inside root or inner directory. Can be max 1 level of directory. Root -> Some dir 1 Task may be added to Root or one of the children dir.
// - Update single item: mark as done, mark as not done, move to different directory.
// - List directories, can fetch all at once
// - List done items in directory. Paginate 5 at a time.
// - List not done items in directory. Paginate 5 at a time.
// - List all items in directory. Paginate 5 at a time.
// - Order items by date when it was created

// - Create directory
// - List directories
// - Remove directory
// - Create todo item
// - Mark todo item as done
// - Mark todo item as not done
// - Move todo item to different directory
// - List todo items in directory
// - List done todo items in directory
// - List not done todo items in directory
// - List all todo items in directory

export default async function createTodo ({
    title,
    userId,
    directoryId,
    }: {
    title: string;
    userId: string;
    directoryId: string;
    }): Promise<PutItemOutput> {
    const params = {
        TableName,
        Item: {
            id: `${userId}-${directoryId}-${title}`,
            title,
            userId,
            directoryId,
            done: false,
        },
    };

    return client.put(params).promise();
    }