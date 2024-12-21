export const getAssetUrl = (url) => new URL(url, import.meta.url).href
export const getRandomLoremFlickerImage = () => {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://loremflickr.com/320/240?random=${randomId}`;
}
