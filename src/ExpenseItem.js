import keyConceptsImage from './assets/images/key-concepts.png';
const ExpenseItem = (props) => {
    return(
        <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">
        <li className="concept">
          <img src={props.image} alt="TODO: TITLE" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
      </ul>
    </div>
    )
}
export default ExpenseItem;
