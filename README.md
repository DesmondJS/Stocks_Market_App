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

