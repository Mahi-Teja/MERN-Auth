# Authentication Code for a MERN App

## Setup Instructions

### 1. Clone the Repository

First, clone the repository from the source:

```bash
git clone https://github.com/Mahi-Teja/MERN-Auth.git
cd MERN-Auth
```

### 2. Backend Setup

#### Navigate to the Backend Directory:

```bash
cd Back-End
```

#### Install Backend Dependencies:

```bash
npm install
```

#### Create a `.env` File:

In the `Back-End` directory, create a file named `.env` and add the following environment variables:

```.env
DB_URL='your mongoDB url'
REFRESH_SECRET='yourJWTsecret'
ACCESS_SECRET='anotherJWTsecret'
PORT=2
```

#### Start the Backend:

From the `Back-End` directory, run:

```bash
npm run dev
```

### 3. Frontend Setup

#### Navigate to the Frontend Directory:

```bash
cd ../FrontEnd
```

#### Install Frontend Dependencies:

```bash
npm install
```

#### Start the Frontend:

From the `FrontEnd` directory, run:

```bash
npm run dev
```
