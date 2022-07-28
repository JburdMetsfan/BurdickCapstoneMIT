const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const DisplayContext = React.createContext(null);



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeGnoXwsyxhin2iVtGIPzhIoGh1rivp1U",
  authDomain: "burdick-bad-bank-capstone.firebaseapp.com",
  projectId: "burdick-bad-bank-capstone",
  storageBucket: "burdick-bad-bank-capstone.appspot.com",
  messagingSenderId: "424184023114",
  appId: "1:424184023114:web:670c72a3fa682f6343feb3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "25rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
