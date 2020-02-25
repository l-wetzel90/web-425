/*
============================================
; Title:  Exercise 8.2
; Author: Loren Wetzel
; Date:   25 February 2020
; Modified By:
; Description: add server-side communications to Angular application
;===========================================
*/

import * as express from "express";

const app = express();

interface Composer {
    id: number;
    firstName: string;
    lastName: string
}

const composers: Composer[] = [
    { id: 10, firstName: "Fredric", lastName: "Chopin" },
    { id: 11, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 12, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 13, firstName: "Wolfgang", lastName: "Mozart" },
    { id: 14, firstName: "Johann", lastName: "Bach" }
];

function getComposers(): Composer[] {
    return composers;
}

app.get('/', (request, response) => {
    response.send('The URL for composers is http://localhost:3000/api/composers');
});

app.get('/api/composers', (request, response) => {
    response.json(getComposers());
});

function getComposerById(composerId: number): Composer {
    return composers.find(c => c.id == composerId);
}

app.get('/api/composer/:id', (request, response) => {
    response.json(getComposerById(request.params.id));
});

const server = app.listen(3000, "localhost", () => {
    console.log("listening on port 3000");
});