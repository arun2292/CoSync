const IS_PROD = window.location.hostname !== "localhost";
const server = IS_PROD
  ? "https://cosync-backend.onrender.com"
  : "http://localhost:8000";

export default server;
