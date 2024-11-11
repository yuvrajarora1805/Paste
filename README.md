# 📝 Paste - Sticky Notes Web Application

### 🚀 Description
**Paste** is a lightweight, responsive web application designed to help users effortlessly create, store, view, edit, and share sticky notes. With its intuitive interface and modern design, users can manage notes efficiently. Whether it's saving important info or sharing links, Paste simplifies note management.

---

### 🌟 Key Features
- **Create Sticky Notes**: Quickly create and save personalized notes.
- **View Notes**: Seamlessly browse through all your stored notes.
- **Edit Notes**: Modify existing notes with just a click.
- **Delete Notes**: Remove notes you no longer need.
- **Copy Content**: Instantly copy a note’s content to your clipboard.
- **Share Links**: Generate a shareable link to send your note to others.
- **Dark/Light Mode**: Toggle between light and dark themes for better readability.
- **Fully Responsive**: Optimized for both desktop and mobile experiences.

---

### 🛠️ Technologies Used
- **Frontend**: React.js, React Router, Framer Motion (for smooth animations)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS for modern, utility-first design
- **Icons**: Font Awesome
- **Local Storage**: Persistent data using browser's local storage

---

### ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SuhasKanwar/Paste.git
   cd Paste
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   npm start
   ```
   or try
   ```bash
   npm run dev
   ```


5. **Access the app**:
   Open your browser and go to `http://localhost:5173`.

---

### 📁 Project Structure

- **public/**: Contains static assets like the favicon and images.
- **src/**: Core of the application, including components, Redux setup, and styles.
  - **components/**: Contains modular components (`NavBar`, `Home`, `Paste`, `ViewPaste`).
  - **redux/**: Handles application state using Redux Toolkit.
  - **App.jsx**: Main app component responsible for routing and rendering the core UI.
  - **App.css**: Tailwind CSS configuration and custom styles.

---

### ⚡ How it Works

- **Create Notes**: Enter a title and content to create a new note.
- **Persistent Storage**: All pastes are stored in `localStorage` for persistent access, even after closing the browser.
- **Edit/Delete**: Modify or delete existing notes anytime.
- **Copy & Share**: Copy the content to your clipboard or generate a shareable link for each note.

---

## ✨ Contributors

- **Suhas Kanwar** – [GitHub Profile](https://github.com/SuhasKanwar)

---
