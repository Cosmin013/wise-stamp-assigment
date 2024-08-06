# WiseStamp Assignment Documentation

## Frontend

The frontend application is developed using Vue.js with the Composition API.

### Technologies Used:
- **Tailwind CSS:** For styling.
- **AJAX:** For making HTTP requests.
- **Vuex:** For state management.

## API

The API is built with Node.js, Express, and TypeScript.

### Routes:
- **POST /templates:** Creates a new template.
- **GET /templates:** Retrieves all templates with default values.
- **POST /:id/generate-signature:** Generates a signature based on the request body and the specified template ID.

### Technologies Used:
- **Amazon S3:** For saving images and generating signed URLs to be used in signatures.
- **MongoDB:** For storing templates.
- **mongo-migrate:** For creating default templates.

## Steps to Run

1. **Clone the Repository:**

```bash
git clone Cosmin013/wise-stamp-assignment
```

2. **Set Up Environment Variables:**

Create a `.env` file based on the `.env.example` file. Include the following variables:

```plaintext
AWS_BUCKET_NAME=
AWS_BUCKET_REGION=
AWS_ACCESS_KEY=
AWS_SECRET_ACCESS_KEY=
```

Ensure the AWS user has permissions to add and read data from the S3 bucket.

3. **Navigate to the Project Directory:**

```bash
cd your-path-to/wise-stamp-assignment
```

4. **Build and Run the Project Using Docker:**

```bash
docker compose build
docker compose up
```