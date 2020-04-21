class Lol extends React.Component {
    state = {
        name: 'Alex',
        age: 17
    }

    incrementAge = (e) => {
        this.setState({
            age: this.state.age + 1
        });
    }

    submitForm = (e) => {
        e.preventDefault();

        let name = e.target.querySelector("input[name='name']").value;
        let age = parseInt(e.target.querySelector("input[name='age']").value);
        this.setState({
            name: name ? name : this.state.name,
            age: (age && age >= 0 || age == 0) ? age : this.state.age
        });
    }

    render() {
        let a = 'Lol kek cheburek';
        return (
            <div className='content'>
                <h1>Hello!</h1>
                <p>My name is { this.state.name } and I'm { this.state.age } years old</p>
                <button onClick={this.incrementAge}>Increment age</button>

                <form onSubmit={this.submitForm}>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='number' name='age' placeholder='Age' />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<Lol />, document.getElementById('container'));