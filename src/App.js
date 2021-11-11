import Card from "./Components/Card/Card";
import PrimaryButton from "./Components/Buttons/PrimaryButton";
import logo from './logo.svg';
import './App.css';
const Title = (props) => <h1>{props.texto}</h1>

const Subtitle = () => <h2>Bienvenidos a este modulo</h2>

function App() {
    return (
    <div className="App">
        <Title texto="Hola soy el titulo" />
        <Subtitle />
        <Card
            title="Soy una card"
            textP="Soy la descripción"
            textButton="Ver más..."
            linkButton="https://google.com.mx"
            urlImage={logo}
            altText="lorem picsum"
        />
        <PrimaryButton text="Visitanos en" link="http://localhost:3000" />
    </div>
    );
}

export default App;
