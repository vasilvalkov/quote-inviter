# Quote Inviter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Development notes

* Project data is based on this starter repo https://stackblitz.com/edit/mitigram-starter
* Avatar/picture links from the provided data do not work. Locally hosted (`assets/img/avatars`) royalty free images are used instead.
* Fonts were not stated explicitly, so assumption was made out of the PDF file that we use `OpenSans` web font for body text and form elements, and `Rajdhani` for headings and headlines.
* There were primary and secondary color scheme variants. An assumption was made that these variants stand for light and dark theme (despite the minor difference), so two modes were implemented.
* Filtering of address book entries is done only by name (of a group or individual).
* Only last two versions of the major browsers are considered. IE not included.
* Layout is based on rems, not on pixels, so that if the user changes browser font size, the UI stays consistent.
* Mobile/Desktop views switch at 48rem (768px / 16 * 1rem).