# How to use Bible Bookmark API

Run `npm install` and then `npm run start` to start this API.

```
NOTE: If you don't have MongoDB installed in your machine it will not work well, since this API requires a database to save data sent via requests.
Because of this, this repository is already configured to be deployed to WeDeploy, where you will have set both the API and the MongoDB service.
```

## Getting a message
```http
GET /messages/:msgId
```

```sh
curl '/messages/:msgId'
```

## Getting all messages
```http
GET /messages
```

```sh
curl '/messages'
```

## Creating messages

```http
POST /messages
```

```sh
curl -X POST -H "Content-Type: application/json" -d $'{"title": "New message", "body": "This is a test message"}' localhost:3000
```

# Updating a message

```http
PUT /messages/:msgId
```

```sh
curl -X PUT -H "Content-Type: application/json" -d $'{"body": "This is a test message update"}' localhost:3000/:msgId
```

# Deleting a message

```http
DELETE /messages/:msgId
```

```sh
curl -X DELETE -H "Content-Type: application/json" localhost:3000/:msgId
```
