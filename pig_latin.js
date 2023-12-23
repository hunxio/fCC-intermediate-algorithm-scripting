/*
 *   Pig Latin is a way of altering English Words. The rules are as follows:
 *   - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
 *   - If a word begins with a vowel, just add way at the end.
 *   Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
  // Defining vowels
  const vowel = /^[a,e,i,o,u]/;
  // Defining consonants
  const consonant = /^[b-d,f-h,l-n,p-t,v-z]+/;
  // 1. Starts with vowel => add "way" at the end;
  // 2. Starts with consonant(s) => remove them, add them at the end and add "ay"
  if (str.match(vowel)) {
    return str + "way";
  } else {
    const removeStarting = str.match(consonant).slice().toString();
    const midPart = str.slice(removeStarting.length);
    return midPart + removeStarting + "ay";
  }
}

console.log(translatePigLatin("eight"));
