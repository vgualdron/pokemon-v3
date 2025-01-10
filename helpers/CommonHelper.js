export default class CommonHelper {
  delay (time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, time);
    });
  }
}
