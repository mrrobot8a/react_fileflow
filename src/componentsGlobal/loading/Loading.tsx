// Loading.tsx
import './Loading.css'; // Importar el archivo de estilos

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
