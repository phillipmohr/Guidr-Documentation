---
title: Steps Form
---

# Create Your Widget: Steps Form

Each step defines what the user should do. Steps can be grouped together and contain four configuration tabs: **Task**, **Button**, **Trigger**, and **Advanced**.

## Task
- **Title**  
  A clear instruction for the user, e.g. “Explore the dashboard”.
- **Description**  
  Add a short explanation of what the user should do. Supports basic formatting (bold, italic, lists).
- **Image**  
  Optionally upload an image to illustrate the task.  
- **Image Alt**  
  Provide an alternative text description for accessibility and SEO.

## Button
- **Show Button**  
  Toggle whether to show a call-to-action button inside the step.
- **Button Type**  
  - **Link** – Redirects the user to a specific page.  
  - **Custom Function (Code required)** – Executes your own JavaScript function when clicked.
- **Button Text**  
  The label displayed on the button.
- **Open in new tab**  
  Choose whether the link should open in the current or a new tab.

## Trigger
- **Trigger Event**  
  Define when this step is considered complete. Options:  
  - **On Click** – Step completes when the user clicks a specific DOM element.  
  - **On Page Visit** – Step completes when the user navigates to a given page URL.  
  - **Manual (Code required)** – Step completes only when triggered manually via API.  
- **Page URL / Selector**  
  Depending on the trigger type, either enter the URL (absolute or relative) or the CSS selector to watch.

## Advanced
- **Step ID**  
  A unique identifier for this step (auto-generated, can be used with API or hooks).  
- **Custom Actions with Hooks**  
  Insert your own logic that runs on step events:  
  - **After a step is completed** – Execute custom code when the step finishes.  
  - **When the user opens the step** – Execute custom code as soon as the step is activated.

::: tip Want to learn more about the Widget Hooks?
Check out the [Developer Docs](/dev/hooks).
:::

## Reorder or Group Steps

- **Drag & Drop** steps to change the order  
- Create **groups** if you want to organize steps (e.g. "Getting Started", "Advanced Features")
