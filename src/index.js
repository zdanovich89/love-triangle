/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let length = preferences.length; 
  let count = 0;  
  for (let i = 0; i<length; i++) {
    let firstSpich = preferences[i] - 1;
    if (firstSpich === i) continue;
    let secondSpich = preferences[firstSpich] - 1;
    if (secondSpich === firstSpich) continue;
    let thirdSpich = preferences[secondSpich] - 1;
    if (thirdSpich === secondSpich) continue;
    if (thirdSpich === i) {
      count++;
    }
  }
    return count/3;

   
}