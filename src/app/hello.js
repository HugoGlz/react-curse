import React, {Component} from 'react';

class Titulo extends Component {
// buenas practicas

  state = {
    text: this.props.texto
  }

  handleAumenta = () => {
    console.log('click');
    this.setState({
      text: this.state.text + '_'
    });
  }

  render() {
    return (
      <div>
        <h1>Esto es un {this.props.titulo}</h1>
        <span> Esto es una descripcion: {this.state.text}</span>
        <button onClick={this.handleAumenta}>dame click</button>
      </div>
    );
  }
}

Titulo.propTypes = {
  titulo: React.PropTypes.string.isRequired,
  texto: React.PropTypes.string
};

class Juego extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  handleListenerClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div>
        <p>Clicks: {this.state.clicks}</p>
        <button onClick={this.handleListenerClick}> Push Click </button>
      </div>
    );
  }
}

export class Hello extends Component {
  render() {
//	const titulo = 'Esto es un titulo';
    return (
      <div>
        <Titulo titulo="un titulo" texto="contenido"/>
        <Titulo titulo="otro titulo" texto="segundo contenido"/>
        <Juego/>
        <Juego/>
      </div>
    );
  }
}
