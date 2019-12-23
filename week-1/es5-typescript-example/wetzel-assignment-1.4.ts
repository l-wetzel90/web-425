// Title: Assignment 1.4
// Author: Loren Wetzel
// Date: 23 December 2019
// Modified By:
// Description: build an Angular application without Angular CLI 
//      using TypeScript

let givenName: string = 'Loren';
let lastName: string = 'Wetzel';

// full name function
function togetherName(givenName: string, lastName: string): string {
    return 'Hello ' + givenName + ' ' + lastName;
}

console.log(togetherName(givenName, lastName));