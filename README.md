# Lab 1: Node.js and Express Server

**Subject:** Backend Development Fundamentals  
**Year/Term:** Year II, Term II  
**University:** Aurora Deemed to be University  
**Faculty:** Mr. Joel Prashanth D

## Student Details

| Field               | Details            |
| ------------------- | ------------------ |
| Name                | Shaik Asif Hussain |
| Registration Number | 252U1R9144         |
| Section             | S-26               |

## Project Objective

This project demonstrates how to build a small Express.js backend, serve JSON and text responses, and prepare the app for deployment on Render. The application exposes a few simple routes and uses a portable port configuration so it can run locally or in a cloud environment.

## Technologies Used

- Node.js
- Express.js `^5.3.0`
- npm
- JavaScript (CommonJS)
- Render deployment configuration

## Project Structure

```text
lab-01/
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── server.js
├── Screenshots/
│   ├── about.png
│   ├── error.png
│   ├── home.png
│   └── time.png
└── node_modules/      # generated locally and excluded from Git tracking
```

## Prerequisites

- Node.js 18 or later
- npm

## Installation

From the project root, run:

```bash
npm install
```

## Run Locally

Start the server:

```bash
npm start
```

The app listens on:

```text
http://localhost:3000
```

You can also override the port locally with:

```bash
PORT=4000 npm start
```

## Available Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Returns the welcome message for the server |
| GET | `/about` | Returns a JSON object with the student name and section |
| GET | `/time` | Returns the current date and time |
| Any | `*` | Returns a 404 message for unknown routes |

Example requests:

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/time
http://localhost:3000/unknown
```

## Screenshots

The project includes screenshot evidence in the `Screenshots/` folder:

- `Screenshots/home.png`
- `Screenshots/about.png`
- `Screenshots/time.png`
- `Screenshots/error.png`

## Testing the Application

1. Install dependencies with `npm install`.
2. Start the server with `npm start`.
3. Open the routes in a browser or with curl:

```bash
curl http://localhost:3000/
curl http://localhost:3000/about
curl http://localhost:3000/time
curl http://localhost:3000/unknown
```

Expected responses:

- `/` returns a welcome message
- `/about` returns JSON
- `/time` returns a date string
- `/unknown` returns `404 Page Not Found`

## GitHub Repository Usage

This project is intended to be pushed to the repository:

```text
https://github.com/asifhussainsk53-prog/lab_report_1
```

If the repository is not already connected locally, set the remote:

```bash
git remote add origin https://github.com/asifhussainsk53-prog/lab_report_1.git
git branch -M main
git push -u origin main
```

## Render Deployment

Use the following Render settings:

- Runtime: Node.js
- Branch: `main`
- Root Directory: empty (repository root)
- Build Command: `npm install`
- Start Command: `npm start`
- Instance Type: Free

Render automatically provides the `PORT` environment variable, so the app uses `process.env.PORT || 3000` and remains compatible with cloud hosting.

## Environment Variables

This project does not require a database or secret credentials. For local development, the optional variable is:

```env
PORT=3000
```

Do not commit `.env` files or private tokens.

## Common Errors and Troubleshooting

- `npm start` fails with `Cannot find module 'express'`: run `npm install`.
- The app starts on the wrong port: confirm that Render sets `PORT` or set `PORT=3000` locally.
- `Page Not Found` appears unexpectedly: verify the route path and the server is running.
- `git status` shows `node_modules` or `.env`: ensure `.gitignore` is present, and remove any accidental tracking with `git rm -r --cached node_modules` if necessary.

## Learning Outcomes

- Created a Node.js project with npm.
- Installed and used Express.js.
- Built GET routes for text and JSON responses.
- Used environment variables for deployment-friendly port binding.
- Prepared the project for deployment on Render.

## Notes

This README is written to reflect the actual implementation in the current workspace. The application is ready for deployment configuration, but no live deployment claim is made unless the project has been successfully deployed and checked in Render.
