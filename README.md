# Assignment 4. Forms and Validation

**Student:** Duman Zhanybekov
**Group:** SE-2530
**Course:** Web Technologies (Front-End)

## Description

A small multi-page website with all the tasks of Assignment 4 about HTML forms, Bootstrap form components and validation. Every page has the same navbar, so you can move between the tasks.

| Page | Task |
|------|------|
| `index.html` | Home page with links to all tasks |
| `task0.html` | Task 0. Simple contact form (name, email, message) |
| `task1.html` | Task 1. Same form with HTML5 validation (required, type, minlength, maxlength, pattern) |
| `task2.html` | Task 2. Contact form made with Bootstrap classes and the grid |
| `task3.html` | Task 3. Bootstrap validation (`is-valid`, `is-invalid`, feedback messages) |
| `task4.html` | Task 4. Registration form (radio, checkbox, select, password + confirm, Submit and Reset) |

## Structure

```
index.html
task0.html ... task4.html
css/style.css
js/task1.js, task3.js, task4.js
README.md
```

## How to run

1. Download or clone the repository.
2. Open `index.html` in a browser (double click is enough, no server needed).
3. Internet is needed because Bootstrap 5.3 is loaded from the CDN.

## How the validation works

- **Task 1** uses only HTML5 attributes, the browser shows the messages.
- **Task 3 and Task 4** have `novalidate` on the form, so the browser popups are off. The attributes (`required`, `minlength`, `pattern`, `type="email"`) are still used: JavaScript calls `checkValidity()` on each field and adds `is-valid` or `is-invalid`.
- Confirm password has no HTML5 rule, so `setCustomValidity()` is used to compare it with the password.
- The Reset button on Task 4 also removes the validation classes and messages.

## Publish (GitHub Pages)

1. Create a new repository on GitHub and upload all files (`index.html` must be in the root).
2. Go to **Settings > Pages**.
3. Under **Source** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and press Save.
4. After a minute the site is available at `https://asleyvv.github.io/web-assignment-4/`.

Live link: [_paste your link here_](https://asleyvv.github.io/web-assignment-4/)
