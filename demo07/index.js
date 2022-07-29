class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myTextInput = React.createRef();
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.myTextInput.current.focus();
    }
    render() {
        return (
        <div>
            <input type="text" ref= {this.myTextInput} />
            <input type="button" value="Focus the text input" onClick={this.handleClick} />
        </div>
        );
    }
    }

const mount_dom = document.getElementById('example');
ReactDOM.render(<MyComponent />, mount_dom);