/* Same function, with and without comments… */

// Fully functional anagram solver
function isAnagramMatch(str1, str2) {
  // Strings must be same length
  return str1.length === str2.length &&
    // Convert str1 to lowercase, then convert to char array,
    // then ensure every character has same freq as freq map
    // provided as `this` context param.
    str1.toLowerCase().split("").every(
      // Using ES5-style function because we require `this` context
      function (char) {
        // If the character is in string map provided as `this` param 
        return this[char] ? 
          // Return number of chars left, then remove one from freq map
          this[char]-- : 
          // Otherwise, return false
          false
      },
      // Convert str2 to lowercase, then convert to char array,
      // then reduce the array into a frequency map
      str2.toLowerCase().split("").reduce(
        (freq_map, char) =>
          // Updating a value in the frequency map 
          // returns true, but we want a false
          // value so we can return the entire map
          !(
            // If this char does not exist in freq_map
			      typeof freq_map[char] === "undefined" ?
              // Add it to map with value 1
              freq_map[char] = 1
              :
              // Otherwise, increase the frequency of char
              freq_map[char]++
          ) ||
          // Return the frequency map
          freq_map
        ,
        {}
      )
    )
}

function isAnagramMatch(str1, str2) {
  return str1.length === str2.length &&
    str1.toLowerCase().split("").every(
      function (char) {
        return this[char] ? 
          this[char]-- : 
          false
      },
      str2.toLowerCase().split("").reduce(
        (freq_map, char) =>
          !(
			      typeof freq_map[char] === "undefined" ?
              freq_map[char] = 1
              :
              freq_map[char]++
          ) ||
          freq_map
        ,
        {}
      )
    )
}
