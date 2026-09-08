const MAX_DIMENSION = 2000;
const JPEG_QUALITY = 0.82;

/**
 * Resizes an uploaded photo in the browser before it's sent anywhere, so a
 * multi-megabyte phone photo becomes a reasonably small JPEG. Keeps uploads
 * fast and comfortably under GitHub's file-size limit for the API this
 * admin page publishes through.
 */
export async function resizeImageFile(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("That file doesn't look like a photo. Please choose an image.");
  }

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("This browser can't process photos. Please try a different browser.");
  }
  ctx.drawImage(bitmap, 0, 0, width, height);

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (result) => (result ? resolve(result) : reject(new Error("Couldn't process that photo."))),
      "image/jpeg",
      JPEG_QUALITY
    );
  });

  return blobToBase64(blob);
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("Couldn't read that photo."));
        return;
      }
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = () => reject(new Error("Couldn't read that photo."));
    reader.readAsDataURL(blob);
  });
}
