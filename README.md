````markdown
# SpendWise Dashboard Shell

## Project Overview

SpendWise is a responsive financial dashboard shell created using HTML and CSS.

The project provides the visual foundation for a future personal finance application. It contains a sidebar navigation menu, dashboard header, financial category cards, spending information, and a monthly summary.

The current version uses static content only. No JavaScript or backend functionality is required for this assignment.

## Files

### index.html

The `index.html` file contains the structure of the dashboard.

It includes:

- SpendWise branding
- Sidebar navigation
- Dashboard header
- User profile section
- Six financial category cards
- Spending progress information
- Monthly financial summary

The six main categories are:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

### style.css

The `style.css` file controls the appearance and layout of the dashboard.

It uses:

- CSS Grid for the overall dashboard layout
- CSS Grid for the financial category cards
- Flexbox for the sidebar
- Flexbox for the header
- Flexbox inside each financial card
- CSS custom properties for the color theme
- Responsive media queries
- Hover and keyboard focus animations
- Dark theme support using `prefers-color-scheme`

## CSS Grid

CSS Grid is used for the main dashboard structure.

The desktop layout contains:

- A sidebar column
- A main content column

CSS Grid is also used to arrange the financial cards into three columns on larger screens.

## Flexbox

Flexbox is used to:

- Arrange sidebar navigation items
- Align the header contents
- Arrange the profile information
- Organize content inside the financial cards
- Arrange the summary information

## CSS Custom Properties

The application's main colors are stored in CSS variables inside the `:root` selector.

Examples include:

- `--brand-color`
- `--accent-color`
- `--surface-color`
- `--background-color`
- `--primary-text`
- `--secondary-text`

Using variables makes it easier to maintain and change the dashboard's visual theme.

## Responsive Design

The dashboard becomes a single-column layout on screens smaller than 768px.

The responsive design was created using CSS media queries.

The layout can be tested using the browser's DevTools Device Toolbar.

Recommended devices to test include:

- Mobile phone
- Tablet
- Desktop

## Micro-interactions

The financial cards include hover and keyboard focus effects.

When a user hovers over or focuses on a card:

- The card moves slightly upward
- A subtle shadow appears
- The transition lasts 200ms

This provides visual feedback while keeping the interface simple.

## Dark Theme

A dark theme is included as a stretch goal.

The dark theme uses:

```css
@media (prefers-color-scheme: dark)
````

Only the CSS custom property values are overridden for the dark theme.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Responsive Design

## Conclusion

SpendWise Dashboard Shell provides a clean and responsive foundation for a future personal finance application.

The project focuses on layout, visual structure, responsive design, reusable CSS variables, and user-interface micro-interactions rather than application functionality.

```
```
