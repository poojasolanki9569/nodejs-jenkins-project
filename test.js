// test.js
const assert = require("assert");

// Deliberate test failure
try {
  assert.strictEqual(1, 2, "This assertion is expected to fail.");
} catch (e) {
  console.error("Test failed:", e.message);
  process.exit(1); // Exit with failure
}
