const test = require("node:test");
const assert = require("node:assert");
const { increment, formatCount } = require("../script.js");

test("increment adds one", () => {
  assert.strictEqual(increment(0), 1);
  assert.strictEqual(increment(41), 42);
});

test("formatCount builds the label", () => {
  assert.strictEqual(formatCount(3), "Cliques: 3");
});
