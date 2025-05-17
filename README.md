# 📚 Books Page — React Book Library Generator

**Books Page** is a web application that lets you generate a custom book library based on a seed key. It combines data generation, visual presentation, and export features — all inside a clean and interactive interface. It's ideal for prototyping, demo content, and UI testing.

🔗 **Live Demo**: [Open App](https://books-page-k0bj.onrender.com)  
📺 **Video Overview**: [YouTube](https://youtu.be/kfVlXJ1ir7Q)

> ⚠️ The live demo is hosted on a free Render plan and may take **a few seconds to start** due to server cold start.

---

## ✨ Key Features

- 🔑 Generate a book collection using a manual or random seed
- 📚 Each book includes:
  - ISBN
  - Title
  - Author
  - Publisher
  - Cover image *(see note below)*
- ❤️ Like probability (0.0 to 10.0 with 0.1 steps)
- 💬 Comment generation works the same way:
  - Automatically adds a commenter name and comment text
- 👁️‍🗨️ Switch between table view and gallery mode
- 📤 Export book list to CSV

---

## ⚙️ Technologies Used

- ⚛️ **React** — UI framework with hooks and functional components  
- ⚡ **Vite** — Lightning-fast development server  
- 🧪 **faker** — Generates realistic fake data for books, authors, and comments  
- 📁 **CSV export** — Convert and download the book list in `.csv` format  

---

## ⚠️ Note

> Some book covers are fetched from third-party sources. Depending on your region, you may need to use a **VPN** to display cover images correctly.

---

## 🚀 Installation

```bash
git clone https://github.com/martsul/books-page.git
cd books-page
npm install
npm run dev
