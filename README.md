# Theological Questions API

A Next.js application for managing theological questions and discussions.

## API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Questions

##### Get All Questions
```
GET /api/questions
```
Returns a list of all theological questions.

##### Add New Question
```
POST /api/questions
```
Creates a new theological question.

Request Body:
```json
{
  "questionId": "string",
  "author": "string",
  "locale": "string",
  "title": "string",
  "categories": ["string"],
  "status": "string"
}
```

## Postman Collection Setup

1. Import the Postman collection:
   - Open Postman
   - Click "Import" and select `postman/collection.json`

2. Import the environment:
   - Click "Import" and select `postman/environment.json`
   - Select the "Theological Questions Environment" from the environment dropdown

3. Update environment variables:
   - Click on "Environments" in the sidebar
   - Select "Theological Questions Environment"
   - Update the following variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `NEXTAUTH_SECRET`: Your NextAuth secret key
     - `NEXTAUTH_URL`: Your application URL

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with the following variables:
```
MONGODB_URI=mongodb://localhost:27017/theological-questions
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

3. Start the development server:
```bash
npm run dev
```

## Testing

The Postman collection includes test scripts for each endpoint. To run the tests:

1. Open the collection in Postman
2. Select the environment
3. Click "Run" to execute all tests

## Security

- All sensitive data is stored in environment variables
- API endpoints are protected with authentication
- MongoDB connection is secured with proper credentials
- Rate limiting is implemented for API endpoints

## Error Handling

The API uses a centralized error handling middleware that:
- Logs errors to the console
- Returns appropriate HTTP status codes
- Provides meaningful error messages
- Includes stack traces in development mode
