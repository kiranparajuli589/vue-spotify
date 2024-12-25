function getImageColor(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Allows CORS-enabled image fetching
    img.src = imageUrl;

    img.onload = () => {
      // Create a canvas and draw the image
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext("2d");

      context.drawImage(img, 0, 0, img.width, img.height);

      // Extract image data
      const imageData = context.getImageData(0, 0, img.width, img.height);
      const { data } = imageData;

      // Calculate average color
      let r = 0, g = 0, b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];     // Red
        g += data[i + 1]; // Green
        b += data[i + 2]; // Blue
      }

      const totalPixels = data.length / 4;


      // is color dark or light
      const brightness = Math.sqrt(0.299 * r*r + 0.587 * g*g + 0.114 * b*b);


      r = Math.floor(r / totalPixels);
      g = Math.floor(g / totalPixels);
      b = Math.floor(b / totalPixels);

      resolve({
        light: brightness > 130,
        color: `rgb(${r}, ${g}, ${b})`
    });
    };

    img.onerror = (err) => reject(err);
  });
}

export const addOpacityToRgb = (color, opacity) => {
  const [r, g, b] = color.match(/\d+/g);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const brightenAbit = (color, factor) => {
  const [r, g, b] = color.match(/\d+/g);
  return `rgb(${r + factor}, ${g + factor}, ${b + factor})`;
}

export const darkenByFactor = (color, factor) => {
  const [r, g, b] = color.match(/\d+/g);
  return `rgb(${r - factor}, ${g - factor}, ${b - factor})`;
}

export default getImageColor;
