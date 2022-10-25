export const PRELOADED_IMAGES: HTMLImageElement[] = [];

export const preloadImage = (images: string[]) => {
  images.forEach((el) => {
    const img = new Image();
    img.src = el;
    img.onload = () => {
      // qqq = img; // /class/pages/32-05-image-preload 참고
      PRELOADED_IMAGES.push(img);
    };
  });
};
