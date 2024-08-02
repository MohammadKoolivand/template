function validMobile(mobile: string) {
  if (/^09[0-9]{9}$/.test(mobile)) {
    return true
  }
  return false
}
export { validMobile }

function validNationalCode(input: string) {
  if (
    !/^\d{10}$/.test(input) ||
    input == '0000000000' ||
    input == '1111111111' ||
    input == '2222222222' ||
    input == '3333333333' ||
    input == '4444444444' ||
    input == '5555555555' ||
    input == '6666666666' ||
    input == '7777777777' ||
    input == '8888888888' ||
    input == '9999999999'
  )
    return false
  const check = parseInt(input[9])
  let sum = 0
  let i
  for (i = 0; i < 9; ++i) {
    sum += parseInt(input[i]) * (10 - i)
  }
  sum %= 11
  return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11)
}
export { validNationalCode }

function validEmail(email: string) {
  if (/[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(email)) {
    return true
  }
  return false
}
export { validEmail }

function validCardNo(cardNo: string) {
  if (/^(?:IR)(?=.{24}$)[0-9]*$/.test(cardNo)) {
    return true
  }
  return false
}
export { validCardNo }

function validSheba(sheba: string) {
  if (/^(?:IR)(?=.{24}$)[0-9]*$/.test(sheba)) {
    return true
  }
  return false
}
export { validSheba }

const addCommas = (val: string): string => {
  val = val.toString().replace(/,/g, '')
  let y = val.replace(/\B(?=([\u06F0-\u06F90-9]{3})+(?![\u06F0-\u06F90-9]))/g, ',')
  y = y.charAt(y.length - 1) === ',' ? y.slice(0, y.length - 1) : y
  y = y.charAt(0) === ',' ? y.slice(1, y.length) : y
  return y
}

export { addCommas }

type RGB = [number, number, number]

function hexToRgb(hex: string): RGB {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((x) => x + x)
      .join('')
  }

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}

function luminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

function getContrastingColor(hex: string): string {
  const rgb = hexToRgb(hex)
  const lum = luminance(rgb[0], rgb[1], rgb[2])

  return lum > 0.5 ? '#000000' : '#FFFFFF'
}

export { getContrastingColor }
