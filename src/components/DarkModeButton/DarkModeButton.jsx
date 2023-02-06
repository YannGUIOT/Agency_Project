
const DarkModeButton = () => {

  let darkMode = false;

  const changeMode = () => {
    darkMode = !darkMode;
    root.classList.toggle("dark-mode");
  }

return (
  <button onClick={changeMode}>Dark Mode</button>
  )
};

export default DarkModeButton;