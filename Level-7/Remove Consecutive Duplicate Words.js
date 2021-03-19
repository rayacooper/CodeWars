// Your task is to remove all consecutive duplicate words from a string, 
// leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


// My First Attempt (Worked for double duplicates, didn't work for triple duplicates)

const removeConsecutiveDuplicates = s => {
    const myRegEx = /(\w+\s)\1/g
    return s.replace(myRegEx, '$1'.replace(/\w+\s/))
}


// Best Practices Version:

const removeConsecutiveDuplicates = s => s.replace(/(\b\w+)( \1\b)+/g, '$1');

// I don't initially understand this solution, so I'm going to go over it. 