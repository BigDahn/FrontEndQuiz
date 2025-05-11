export default function getStorage() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    return JSON.parse(localStorage.getItem("theme"));
  }
  return false;
}