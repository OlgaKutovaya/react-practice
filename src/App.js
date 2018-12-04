import React, {Component} from 'react';
import './App.css';
import InnerBox from "./components/InnerBox";
import Car from "./components/Car";


class App extends Component {
    state = {
        value: '',
        title: 'Title',
        info: 'Information',
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ],
        showCars: false
    };

    submitHandle = (text) => {
        this.setState({
            value: text
        });
        console.log(text);
    };

    changeTitleHandler = () => {
        let newTitle = 'New title';
        this.setState({
            title: newTitle
        })
    };

    changeInfoHandler = (newInfo) => {
        this.setState({
            info: newInfo
        })
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };

    deleteHandler (index)  {
        const newCars = [...this.state.cars];
        newCars.splice(index, 1);
        this.setState({
            cars: newCars
        })
    };

    onChangeCarNameHandler = (name, index) => {
        const car = this.state.cars[index];
        car.name = name;
        const newCars = [...this.state.cars];
        newCars[index] = car;
        this.setState({
            cars: newCars
        })
    };

    render() {
        return (
            <div className="app">
                <div>
                    <h1>{this.state.title}</h1>
                    <button
                        onClick={this.changeTitleHandler}>
                        change title
                    </button>
                </div>

                <div>
                    <h2>{this.state.info}</h2>
                    <button
                        onClick={this.changeInfoHandler.bind(this, 'This information was changed')}>
                        change info
                    </button>
                </div>

                <div className="info-wrapper">{this.state.value}</div>
                <form>
                    <input type="text"
                           className='push-text'
                           value={this.state.value}
                           onChange={event =>
                               this.setState({value: event.target.value})
                           }
                    />
                    <button onClick={(event) => {
                        event.preventDefault();
                        this.submitHandle(this.state.value);
                    }}>
                        Push text
                    </button>
                </form>

                <InnerBox onChangeTitle={this.changeTitleHandler}/>

                {/* выполнение действия по условию */}
                <button className='show-cars-btn'
                    onClick={this.toggleCarsHandler}>
                    show cars
                </button>

                {/*преобразование массива в JSX компонент*/}
                {this.state.showCars ?
                    this.state.cars.map((car, index) => {
                    return (
                        <Car key={index}
                             name={car.name}
                             year={car.year}
                             onDelete={this.deleteHandler.bind(this, index)}
                             onChangeName={(event) =>
                                 this.onChangeCarNameHandler(event.target.value, index)}
                        />
                    )
                }): null}


            </div>
        );
    }
}

export default App;