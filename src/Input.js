import {Component} from 'react';
export class Input extends Component {
    state = {
        userInput: "",
        bucketList: []
    }
    
typeText(e) {
    this.setState({userInput: e})
}
addItem (input) {
    if (input ==='') {
        alert ("Please enter an item")
    } else {
    let listArray = this.state.bucketList;
    listArray.push(input);
    this.setState({ bucketList: listArray, userInput: ''})
}
}

crossedWord(event) {
const li = event.target;
li.classList.toggle('crossed');
}

deleteItem () {
    let listArray = this.state.bucketList;
    listArray=[];
    this.setState({bucketList: listArray})
  }

onFormSubmit(e) {
e.preventDefault();
}

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
             <input type="text" 
             placeholder="What would you like to do?" 
             onChange={(e) => {this.typeText(e.target.value)}}
             value={this.state.userInput}/>

<div>
<button className='Add' onClick = { () => this.addItem (this.state.userInput)}>ADD</button>
</div>

<ul>
            {this.state.bucketList.map((item, index) => (
            <li onClick={this.crossedWord} key={index}>{item} </li>
            ))}
           </ul>

<div>
<button className='Delete' onClick = { () => this.deleteItem ()}>DELETE</button>
</div>
</form>
</div>
        )
        }
    }
