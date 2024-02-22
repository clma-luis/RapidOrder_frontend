import "@testing-library/jest-dom/extend-expect";

global.setImmediate = (callback) => {
  process.nextTick(callback);
};
