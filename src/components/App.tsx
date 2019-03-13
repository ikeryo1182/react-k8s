import * as React from "react";
import "./App.scss";

interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <h1>Hello World!</h1>
            </div>
        );
    }
}

export { AppProps };
export default App