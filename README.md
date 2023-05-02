# Craft Organizer
The Craft Organizer is a **minimal viable product (MVP)** that allows the user to input details of a craft, star favorite crafts, and delete crafts from the DOM.

This way, links to craft ideas can be easily found and referened based on medium, method, and challenge level with corresponding source link.

### Features
* Easily toggle between adding crafts and viewing craft list without needing to refresh the page
* Craft ideas saved to db.json
* Source link accessed by source name

### How To Use
1. Add craft idea to form including the medium, method, and challenge level.
    * make sure to add the source name and link.
2. Review the list of crafts and star any favorites.
3. Trash any craft ideas with the trashcan

### Requirements
* Have json-server installed

### Installation Instructions
* Fork and clone
* Run `json-server --watch db.json`
* In a separate terminal, `open index.html`