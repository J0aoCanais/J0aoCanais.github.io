/**
 * Increments the click counter.
 * @param {number} count - Current number of clicks.
 * @returns {number} The new number of clicks.
 */
function increment(count) {
  return count + 1;
}

/**
 * Builds the text shown in the counter element.
 * @param {number} count - Number of clicks.
 * @returns {string} Label to display.
 */
function formatCount(count) {
  return `Cliques: ${count}`;
}

if (typeof document !== "undefined") {
  let count = 0;
  const btn = document.getElementById("btn");
  const counter = document.getElementById("counter");

  btn.addEventListener("click", () => {
    count = increment(count);
    counter.textContent = formatCount(count);
  });
}

if (typeof module !== "undefined") {
  module.exports = { increment, formatCount };
}
