import "./styles.css";
import Display from "./Display";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>props function show!</h2>
      <div className="list">
        <div className="row-1">
          <Display name="Mohit" class="B.com" />
          <Display name="Bhavesh" class="B.com" />
        </div>
        <div className="row-1">
          <Display name="Lajja" class="B.com" />
          <Display name="Pooja" class="B.com" />
        </div>
        <div className="row-1">
          <Display name="Preet" class="B.com" />
          <Display name="Harshita" class="B.com" />
        </div>
        <div className="row-2">
          <Display name="Rehan" class="B.com" />
          <Display name="Mohit" class="B.com" />
        </div>
      </div>
    </div>
  );
}
