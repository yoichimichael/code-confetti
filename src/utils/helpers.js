function isLetter() {
  const num = Math.floor(Math.random() * 10);
  return num > 4;
}

function generateZeroThroughNine() {
  return Math.floor(Math.random() * 10);
}

function generateLetterAThroughF() {
  const letters = ["a", "b", "c", "d", "e", "f"];
  const randomIndex = Math.floor(Math.random() * 6);
  return letters[randomIndex];
}

function generateRandomColorHex() {
  return `${
    isLetter() ? generateLetterAThroughF() : generateZeroThroughNine()
  }${isLetter() ? generateLetterAThroughF() : generateZeroThroughNine()}${
    isLetter() ? generateLetterAThroughF() : generateZeroThroughNine()
  }${isLetter() ? generateLetterAThroughF() : generateZeroThroughNine()}${
    isLetter() ? generateLetterAThroughF() : generateZeroThroughNine()
  }${isLetter() ? generateLetterAThroughF() : generateZeroThroughNine()}`;
}

function generateZeroThroughNinetyNine() {
  return Math.floor(Math.random() * 100);
}

function generateRandomPosition() {
  return [generateZeroThroughNinetyNine(), generateZeroThroughNinetyNine()];
}

function generateThreeThroughTen() {
    return Math.floor(Math.random() * 30);
}

function generateRandomRadius() {
  return [generateThreeThroughTen(), generateThreeThroughTen()];
}

function generateZIndex() {
  return Math.floor(Math.random() * 13);
}

function generateShapes() {
  return Math.floor(Math.random() * 100);
}

function generateNRandomCircleProperties(n) {
  const circleProperties = [];
  for (let i = 0; i < n; i++) {
    const cProperty = {
      color: generateRandomColorHex(),
      position: generateRandomPosition(),
      radius: generateRandomRadius(),
      zIndex: generateZIndex(),
      borderRaduis: generateShapes(),
    };
    circleProperties.push(cProperty);
  }
  return circleProperties;
}

module.exports = {
  generateNRandomCircleProperties,
};
