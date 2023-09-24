import SessionStateProvider from "./components/providers/SessionStateProvider.jsx";
import AppRouter from "./router/AppRouter.jsx";

function App() {
  return (
    <SessionStateProvider>
      <AppRouter></AppRouter>
    </SessionStateProvider>
  );
}

export default App;
