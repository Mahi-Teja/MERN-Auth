# Authentication Code for a MERN App

## Setup Instructions

### 1. Clone the Repository

First, clone the repository from the source:

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Backend Setup

#### Navigate to the Backend Directory:

```bash
cd BE
```

#### Install Backend Dependencies:

```bash
npm install
```

#### Create a `.env` File:

In the `BE` directory, create a file named `.env` and add the following environment variables:

```env
DB_URL='your mongoDB url'
REFRESH_SECRET='yourJWTsecret'
ACCESS_SECRET='anotherJWTsecret'
PORT=2
```

#### Start the Backend:

From the `BE` directory, run:

```bash
npm run dev
```

### 3. Frontend Setup

#### Navigate to the Frontend Directory:

```bash
cd ../FE
```

#### Install Frontend Dependencies:

```bash
npm install
```

#### Start the Frontend:

From the `FE` directory, run:

```bash
npm run dev
```
