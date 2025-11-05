<div align="center">

# 📧 Mail Service  
### A high-performance email microservice built for notifications, verifications, and alerts.

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Deploy with Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

<br>

💡 **Official Repository:**  
👉 [ZIPP — GitHub Repository](https://github.com/PIYUSH-GIRI23/zipp)

</div>

---

## 🚀 Features

- ✉️ **Transactional Emails** — Send OTPs, verification, and notification emails.  
- 💾 **Redis Caching** — Store OTPs or mail tokens securely.  
- 🧠 **Custom Mail Templates** — Dynamic HTML templates with custom data.  
- 🧩 **Modular Utilities** — Reusable mail handling and content builders.  
- ⚙️ **Environment Driven** — Configurable SMTP, API keys, and limits.  
- ☁️ **Vercel Ready** — Deploy and scale instantly.  

---

## 🧱 Project Structure

<pre>
mailservice/
├── node_modules/                # Installed dependencies
│
├── redis/                       # Redis initialization
│   └── redis_init.js
│
├── utils/                       # Helper utilities
│   ├── mail.js                  # Handles sending emails
│   └── mailbody.js              # Builds HTML email templates
│
├── .env                         # Environment variables
├── .env.config                  # Config template
├── .gitignore                   # Git ignored files
├── package.json                 # Dependencies & metadata
├── package-lock.json            # Locked dependency versions
├── Readme.md                    # This file ❤️
├── server.js                    # Entry point of Mail Service
└── vercel.json                  # Vercel configuration
</pre>

---

## ⚙️ Setup & Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/PIYUSH-GIRI23/zipp-mailservice.git

# 2️⃣ Move into the directory
cd mailservice

# 3️⃣ Install dependencies
npm install

# 4️⃣ Configure environment variables
cp .env.config .env

# 5️⃣ Start the server
npm run dev

--- 

🌐 Connect with Me

<a href="mailto:giri.piyush2003@gmail.com"><img src="https://img.shields.io/badge/Mail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Mail"></a>
<a href="https://github.com/PIYUSH-GIRI23"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
<a href="https://www.linkedin.com/in/piyush-giri-031b71254/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
<a href="https://x.com/GIRIPIYUSH2310"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"></a>
