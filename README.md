# 📈 Stocks Market App

An AI-powered stock dashboard that allows users to search, track, and analyze stocks with real-time market data, personalized watchlists, and automated AI-driven insights.

Built with a modern full-stack architecture using **Next.js 15, MongoDB, Gemini AI, and Inngest** workflows, the application provides a seamless experience for monitoring stocks and receiving automated financial insights.

## 🌐 Live Demo
https://stocks-market-app-livid.vercel.app/  

---  

## 🚀 Features  
### 🔐 Authentication  

- Secure user authentication powered by **Better Auth**  
- **MongoDB** session storage  
- Protected routes via middleware and root layout  

### 📊 Stock Dashboard  

- Interactive **TradingView** widgets  
- Market overview and stock visualizations  
- Real-time financial charts

### 🔎 Smart Stock Search  

- Cmd/Ctrl + K command palette  
- Debounced search requests  
- Powered by **Finnhub API**  
- Default fallback for popular stocks

### ⭐ Watchlist Management

Users can:  
- Add stocks to watchlist
- Edit company category  
- Sort and filter watchlist entries  
- Navigate directly to stock pages  
- Watchlist data is persisted in **MongoDB Atlas**

### 🤖 AI Features

The platform integrates **Google Gemini AI** for intelligent automation.  
Capabilities:

- Personalized welcome emails  
- AI-generated stock summaries  
- Automated daily news digests

### ⚙️ Automation Workflows

Powered by **Inngest**:  
- Event-driven workflows  
- Scheduled cron jobs  
- AI processing pipelines  
Automations include:  
- Welcome email generation  
- Daily financial news summaries

---  

## 🖼 Screenshots  
### Dashboard  
![Dashboard Pic](https://github.com/DesmondJS/Stocks_Market_App/blob/main/screenshots/dashboard.png)   

### Stock Search  
![Stock Search Pic](https://github.com/DesmondJS/Stocks_Market_App/blob/main/screenshots/searchbar.png)    

### Stock Details Page  
![Details Pic](https://github.com/DesmondJS/Stocks_Market_App/blob/main/screenshots/stock-page.png)   

### Watchlist  
![Watchlist Pic](https://github.com/DesmondJS/Stocks_Market_App/blob/main/screenshots/watchlist.png)   

---  

## 🧠 System Architecture  

```
User
 │
 ▼
Next.js 15 (App Router)
 │
 ├── Authentication (Better Auth)
 │
 ├── API Routes
 │     ├── Finnhub API
 │     ├── Gemini AI
 │     └── Watchlist CRUD
 │
 ├── MongoDB Atlas
 │
 └── Inngest Workflows
       ├── AI Email Generation
       └── Daily News Automation
              │
              ▼
           Nodemailer
              │
              ▼
            Gmail
```

---

## 🛠 Tech Stack  

### Frontend:
- **Next.js 15** (App Router + Turbopack)
- **React 19**
- **Tailwind CSS V4**
- **Shadcn/ui**

### Backend:
- **Next.js** API Routes
- **Typescript**
- **MongoDB Atlas**
- **Mongoose**
- **Better-Auth**

### Market Data:
- **Finnhub API**: stock search and company data
- **TradingView Widgets**: financial charts and analytics

### AI Integration:
- **Google Gemini API**
- AI-powered summaries and email content generation

### Automation & Workflows
- **Inngest**
- Event-driven background tasks
- Cron-based automation

### Email Service
- **NodeMailer**
- Gmail SMTP transport

### Deployment 
- **Vercel**

---

## 🔄 Implemented Workflows

### User Authentication
1. User signs up / signs in
2. Server actions in `auth.action.ts` process credentials
3. **Better-Auth** manages sessions with MongoDB
4. Middleware protects authenticated routes

### Session Protected App Shell
The root layout verifies the user session.  
If no session exists:  
```
redirect → /login
```
Authenticated users gain access to:  
- Dashboard
- Stock pages
- Watchlist
- Search

### Stock Search Flow
```
Cmd/Ctrl + K
      │
      ▼
Debounced query
      │
      ▼
Finnhub API
      │
      ▼
Stock result list
      │
      ▼
Navigate → /stocks/[symbol]
```

### AI Email Automation
#### Event Trigger
On Sign Up:  
```
app/user.created
```  
#### Inngest Workflow  
1️⃣ Event emitted after signup  
2️⃣ Inngest function triggers  
3️⃣ Gemini generates personalized email content  
4️⃣ Nodemailer sends welcome email  

### Daily AI News Summary  
A scheduled Inngest cron job runs daily.  
```
CRON: 0 12 * * *
Timezone: Asia/Kuala_Lumpur
```
Workflow:  
```
Fetch stock-related news
        │
        ▼
Gemini generates summaries
        │
        ▼
Email digest sent to users
```

---

## ⚙️ Running the Project Locally  
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/DesmondJS/Stocks_Market_App.git
cd stocks-app
```  

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file.
```
NODE_ENV="development"

NEXT_PUBLIC_BASE_URL=http://localhost:3000

MONGODB_URI=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

GEMINI_API_KEY=

#NODEMAILER
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=

#FINNHUB
NEXT_PUBLIC_FINNHUB_API_KEY=
```

### 4️⃣ Run the Development Server
```bash
npm run dev
```
App runs on:  
```  
http://localhost:3000
```  

### 5️⃣ Start Inngest Dev Server
In **another terminal** run:  
```bash
npx inngest-cli@latest dev
```  
This enables:  
- Event workflows
- AI automation
- Cron jobs

--- 

## 🚀 Deployment
The app is deployed using **Vercel**.  
Deployment includes:  
- Environment-based secrets
- Serverless API routes
- Inngest webhook integration
- MongoDB Atlas cloud database
  
Live Site:  
https://stocks-market-app-livid.vercel.app/

---

## 🔮 Future Improvements  
Potential enhancements:  
- 📊 Portfolio tracking
- 🔔 Price alerts & notifications
- 🧠 AI-powered investment insights  


