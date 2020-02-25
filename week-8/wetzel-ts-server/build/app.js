"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const composers = [
    { id: 10, firstName: "Fredric", lastName: "Chopin" },
    { id: 11, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 12, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 13, firstName: "Wolfgang", lastName: "Mozart" },
    { id: 14, firstName: "Johann", lastName: "Bach" }
];
function getComposers() {
    return composers;
}
app.get('/', (request, response) => {
    response.send('The URL for composers is http://localhost:3000/api/composers');
});
app.get('/api/composers', (request, response) => {
    response.json(getComposers());
});
function getComposerById(composerId) {
    return composers.find(c => c.id == composerId);
}
app.get('/api/composer/:id', (request, response) => {
    response.json(getComposerById(request.params.id));
});
const server = app.listen(3000, "localhost", () => {
    console.log("listening on port 3000");
});
//# sourceMappingURL=app.js.map