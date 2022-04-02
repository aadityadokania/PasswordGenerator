export const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }

  export const randomLower = () => {
    return String.fromCharCode(random(97, 122))
  }

  export const randomUpper = () => {
    return String.fromCharCode(random(65, 90))
  }

  export const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>"
    return symbols[random(0, symbols.length - 1)]
  }