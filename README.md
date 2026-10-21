# adnan-web-developer-portfolio

I'll build your Adnan — Web Developer portfolio using React and Tailwind CSS with a minimal white design, clean typography, generous spacing, and a professional layout.

The website will include responsive navigation, a hero section, project cards, an about section, skills, and a contact form. I'll also make the navigation and interactive elements functional, so you have a useful starting point for your Lovable.dev project.

## Your portfolio code is ready

## Adnan Web Developer Portfolio

React · Tailwind CSS · Vite · Lucide icons

Complete project with 6 files

Download the complete project ZIP

&#x20; Copy setup commands&#x20;

## What's included

[Palmer-Inspired Portfolio — built with AI on Blink](https://images.openai.com/static-rsc-4/lHmGKjGFEZ8A-xSdP1uYu64-LG_aiOpW_go9u1adHeGtm12CUZKiiNx-nFAag8_uNRI0wGiC14Sl9_jj3VGPsszFAhRjCLZTidwGpONrm3h_eEbajqJR91L7BvetsWrC2eMOkKquJ2d6qz2Yr7kK2OElocxb78GHjkyo065QXfE?purpose=inline)

01\. Hero and navigation

Clean introduction, responsive mobile menu, and links to every section.

[Osei Framer Portfolio Template Design by Ruxandra Nastase](https://images.openai.com/static-rsc-4/v1YD2QLi9ttLtCsGQYDLolSjzKckL8PPDCf_ytDJa4rzcm5r-TZMcIIOBV-mqsHlGHNY5mJ0xrl1CPYid5EHIUzZFIiAuQLDeQpHArTCIiUVKMjjOwqK7KSqdPdxya8TkYm4oyBeWh_janXZ_8FIBSuQOZUE41zLoK19eBth-pA?purpose=inline)

02\. Project showcase

Three project cards with custom CSS illustrations, descriptions, and technology tags.

[Personal portfolio website for Frontend developer :: Behance](https://images.openai.com/static-rsc-4/_AjdYYyvQChRMeynY9r5npP1US16I6xdmG9sgvTHcp4PhREZHAptPq0DwHAojyqNBobhxFUf2EJCI1rEfvgtrqWfGapLIpysz03oellCbU57uFvoS089tyKXt5CNasWKP5AG7kjJKKU6-MV1xDI7dYrd8lb2PA2su-yWNw4rtcU?purpose=inline)

03\. About and skills

Personal introduction and a structured list of your development skills.

[Minimalist Contact Page by Misha Rudrastyh Digital on Dribbble](https://images.openai.com/static-rsc-4/Sl1U_TmTi8HNvyMu_-OmPsncVCIfNXXLF40usOGPjrYyx0WO2rwnBxww7_JDKGLpBqbo90rCe0TboL6M9okGLoKdkwKLxSrjvcDosCTOStmrgOYdmhPAacpuaKsZokDtZBptHv91SFoOJvHnQer0o7AqAmZfUfRTBcHxFDp6Kqg?purpose=inline)

04\. Contact and footer

Validated contact form, email link, social links, and back-to-top navigation.

## How to run the website

1. Download and extract the ZIP file.
2. Install [Node.js](https://nodejs.org/?utm_source=chatgpt.com) if you don't already have it.
3. Open the extracted project folder in VS Code.
4. Open a terminal in that folder and run:
   ```
   npm install
   npm run dev
   ```
5. Open the local URL shown in your terminal, usually `http://localhost:5173`.

## Three things to customize before publishing

- Email: Replace `hello@example.com` in `src/App.jsx` with your real contact email. The form opens the visitor's email application; it doesn't send messages to a server.
- Projects: Replace the example project descriptions and GitHub links with your actual projects.
- Social profiles: Update the GitHub and LinkedIn URLs to your own profiles.

Next step: You can also import the project into your GitHub workflow and connect it to Lovable.dev, or use the existing code as a reference for your Lovable project. Review the result in a browser before publishing.












I reviewed the source code of your Adnan Adil — Web Developer Portfolio project. It uses React, Vite, Tailwind CSS, and regular CSS to create a responsive personal portfolio.

I'll explain how the pieces work together, where the content lives, and what you should change to make the website your own.

One note: I can inspect the original project ZIP I created, but I can't see the edits you've made directly in VS Code since then. The review below is based on that starter code.&#x20;

# 1. How your project is organized

`index.html`

The initial HTML page containing the root element where React renders your app.

`src/main.jsx`

Starts React and loads the app and stylesheet.

`src/App.jsx`

Contains your page sections, project data, navigation, skills, and contact form logic.

`src/styles.css`

Controls colors, spacing, typography, layout, mobile responsiveness, and hover effects.

`package.json` and `vite.config.js`

Define the packages, development commands, and build configuration.

The flow is:

`index.html` — page entry point

`main.jsx` — starts React

`App.jsx` — builds the page

`styles.css` — styles the page

Vite serves the app locally and rebuilds it when you save changes.

# 2. Understanding `App.jsx`

This is the main file to learn first. It contains the content and behavior of your portfolio.

## A. Project data

Near the top of the file, there is an array named `projects`:

```
const projects = [
  {
    number: "01",
    title: "Developer Portfolio",
    category: "PERSONAL BRAND · WEB DESIGN",
    description: "A thoughtful home on the web...",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    visual: "portfolio",
    href: "https://github.com/",
  },
];
```

This is a JavaScript array containing objects. Each object represents one project card.

| Property      | What it controls                     |
| ------------- | ------------------------------------ |
| `number`      | The project's displayed number       |
| `title`       | The project name                     |
| `category`    | The small category label             |
| `description` | The project summary                  |
| `tags`        | The technology labels                |
| `visual`      | Which mockup design to display       |
| `href`        | Where clicking the project takes you |

How to customize it: replace the example titles, descriptions, tags, and links with details from your real projects. The existing design will display the updated information automatically.

The `skills` array works similarly: it contains the names of your skills and a short explanation of each.

## B. Reusable components

Your code defines components such as `SectionHeading` and `ProjectVisual`.

For example:

```
function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="heading-row">
        <h2>{title}</h2>
        {note && <p className="heading-note">{note}</p>}
      </div>
    </div>
  );
}
```

This is a reusable React component. Instead of writing the same heading markup repeatedly, the page passes different values into it:

```
<SectionHeading
  eyebrow="THE TOOLKIT"
  title="Tools I work with."
  note="A growing set of skills."
/>
```

The values inside `{...}` are called props. They allow one component to display different content in different places.

## C. How the project cards appear

Your projects section uses this code:

```
{projects.map((project) => (
  <article key={project.number}>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </article>
))}
```

Here's what happens:

1. `projects.map()` loops over the project array.
2. For each object, React creates a project card.
3. `{project.title}` displays that object's title.
4. `{project.description}` displays its description.
5. `key={project.number}` helps React track each card when the list changes.

This means you don't need to manually build a separate HTML section for every project.

## D. How the project previews are made

An important detail: the starter project does not use actual screenshots for its three project previews. They are miniature website mockups created using JSX elements and CSS.

The `ProjectVisual` component checks the `visual` property:

```
if (type === "portfolio") {
  return (
    <div className="mock-browser visual-portfolio">
      {/* Mock website preview */}
    </div>
  );
}
```

The other values, `"landing"` and `"dashboard"`, display different mockup layouts.

This is why changing an image URL won't necessarily work in the original version. To show real screenshots, you'd update `ProjectVisual` to render an `<img>` element, or add an `image` property to each project and display it.

# 3. How the interactive features work

## Mobile navigation

The app uses React state:

```
const [menuOpen, setMenuOpen] = useState(false);
```

- `false` means the mobile menu is closed.
- `true` means the menu is open.
- Clicking the menu button toggles between those values.

This expression controls which CSS class the navigation receives:

```
className={`nav-links ${menuOpen ? "nav-open" : ""}`}
```

The CSS then shows the menu when `nav-open` is present.

## Contact form

The form uses state to track the name, email, and message:

```
const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});
```

When you type into a field, `updateField` updates the corresponding value. When you submit, `handleSubmit` prepares an email using a `mailto:` link.

Important limitation: the starter form does not send messages to a server or database. It attempts to open the visitor's default email application.

The starter code still contains `hello@example.com`, which you should replace with your real contact email in both the form handler and the displayed email link.

# 4. Understanding `styles.css`

Your stylesheet defines the visual design and layout of the portfolio.

Some of the important CSS concepts used in it are:

- CSS variables: values such as `--paper`, `--ink`, and `--accent` make the color scheme easier to change.
- Flexbox: aligns elements in a row or column, such as the navigation bar.
- CSS Grid: arranges project cards and the two-column sections.
- Media queries: change the layout for smaller screens.
- Hover effects and transitions: animate links and project cards when a visitor interacts with them.
- `prefers-reduced-motion`: reduces animations for visitors who have requested less motion in their device settings.

For example, the desktop project grid uses:

```
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
```

This creates three equal-width columns. A mobile media query changes the grid to a single column.

The CSS can be formatted across multiple lines without changing how it works. Formatting improves readability, not functionality.

# 5. What I would improve in the existing code

Good foundation

The code has reusable components, project and skill data separated from the layout, responsive styles, accessible form labels, and a mobile navigation state.

Fix the icon imports

Your starter file imports `Github` and `Linkedin` from `lucide-react`, but you've encountered export errors in your installed package. Your current local code may already have some of these imports removed. Check the actual file before making further changes.

Replace placeholder links

The example project links lead to the GitHub homepage, and the social links are generic. Add your actual repository URLs, live project URLs, and social profiles.

Improve contact reliability

The current form depends on the visitor having an email application configured. If you want messages submitted directly through the website, you'll need a backend or a form service.

Make dependencies more predictable

The starter `package.json` uses `"latest"` for several packages. For a more stable project, use compatible, tested package versions rather than allowing all dependencies to change whenever you reinstall.

# 6. How to test your project

Whenever you make changes, use the terminal in your project folder.

Start the development server:

```
npm run dev
```

Then open `http://localhost:5173/` in your browser.

Before publishing the site, check that it builds:

```
npm run build
```

If the build succeeds, Vite will generate the production files in the `dist` folder.

## What should you learn next?

My recommendation is to learn `App.jsx` first, especially the `projects` array, the `ProjectVisual` component, and the `App()` function. Those three areas explain most of the content and behavior you see on the page.

If you upload your current `src/App.jsx` and `src/styles.css`, I can review the exact versions you're working with now, including the changes you've made to fix the icon errors, and explain the code section by section.