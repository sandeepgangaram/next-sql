# [NeXTSQL](https://next-sql-sandev.vercel.app/)

### A SQL Playground for Data Professionals

Deployed at:

-   [https://next-sql-sandev.vercel.app/](https://next-sql-sandev.vercel.app/)

NOTE: This application is Frontend only App as of now and doesn't talk to any database/server yet. It generates Dummy data for now.

## Features

### Current

-   Run SQL Queries
-   Save Your Queries with a Name
-   Ability to Search for executed queries
-   Download Query Data as CSV or Excel Worksheet file.
-   View Data Table in Fullscreen mode.
-   Handle large datasets
-   Dashboard to see overall activity

### To Be Added

-   Query Validation
-   Query Autocomomplete
-   Code Editor instead of TextArea
-   Share Data over email/chat
-   Auth
-   Collaborate with others
-   Clean/Modify on Data on UI before Download/Share
-   ...

## Page Load Times

| FramRate | Time to load Setup (Desktop)              |
| -------- | ----------------------------------------- |
| 58.8fps  | 915ms - 1.35s No Throttle, Cache Disabled |
|          | 630ms - 1.09s No Throttle, Cache Enabled  |

Measured using Chrome Dev Tools - Network, Performance

## Performace Improvements Strategies

-   Avoid Unnecessary Paint : Chrome Dev Tools - Performance, Layers
    -   Removed layer collision
    -   Traded transition for reducing re-paint
    -   will-change property on certian elements
-   Reduce Critical Resources (Critical Bytes) : Chrome Dev Tools used - Coverage
    -   Removed some of the unused CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Libraries Used

-   Next.js
-   React.js
-   PrimeReact UI Library

This project has been built on top of [sakai-react](https://www.primefaces.org/sakai-react/) template developed using PrimeReact UI Library. Check out the[repo here.](https://github.com/primefaces/sakai-react)

Happy Coding!
