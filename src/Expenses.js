import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
<div className="expenses">
    <ExpenseItem 
    title={props.item[0].title}
    image={props.item[0].image}
    description={props.item[0].description}
    />  
    <ExpenseItem 
    title={props.item[1].title}
    image={props.item[1].image}
    description={props.item[1].description}
    />  
    <ExpenseItem 
    title={props.item[2].title}
    image={props.item[2].image}
    description={props.item[2].description}
    />  
</div>
}
export default Expenses;