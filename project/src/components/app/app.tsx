// Others
import MainPage from '../../pages/main-page/main-page';

// Types
type AppProps = {
  films: {
    id:string;
    name: string;
    preview: string;
  }[];
}

// Component
function App({
  films
}: AppProps): JSX.Element {
  return <MainPage films={films} />;
}

export default App;
