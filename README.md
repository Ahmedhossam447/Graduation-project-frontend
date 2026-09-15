# SkillPilot - Login Page (PoC)

This is a simple proof-of-concept login page for the SkillPilot project. It is built using standard React and plain CSS (no Tailwind or extra UI libraries).

## How to run

If you just cloned or pulled the repo, install the dependencies first:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Login credentials

For testing this PoC, use:
- Username: `admin`
- Password: `admin`

If you type anything else, it will show an error message.

## What is implemented

- The form validates that both fields are filled and match `admin` / `admin`.
- When you click "Sign In", it shows a 1.5-second loading spinner to simulate an API request, then shows "Welcome to SkillPilot".
- You can click "Sign Out" on the welcome screen to return to the login form.
- "Remember Me" and "Forgot Password" are placeholders and marked as not included in this PoC.

## File structure

- `src/components/LoginPage.jsx`: Manages the state between the login form and the welcome message.
- `src/components/LoginForm.jsx`: Handles the form inputs, validation, show/hide password toggle, and the loading state.
- `src/styles/LoginForm.css` & `src/styles/LoginPage.css`: Plain CSS styling for the components.
- `src/index.css`: Global styles, colors, and fonts.
