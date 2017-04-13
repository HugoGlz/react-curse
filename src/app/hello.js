import React, {Component} from 'react';

class Titulo extends Component {
// buenas practicas

  state = {
    text: this.props.texto
  }

  render() {
    return (
      <div>
        <h1>Esto es un {this.props.titulo}</h1>
        <span> Esto es una descripcion: {this.state.text}</span>
      </div>
    );
  }
}

Titulo.propTypes = {
  titulo: React.PropTypes.string.isRequired,
  texto: React.PropTypes.string
};

export class Hello extends Component {
  render() {
//	const titulo = 'Esto es un titulo';
    return (
      <div>
        <Titulo titulo="un titulo" texto="contenido"/>
        <Titulo titulo="otro titulo" texto="segundo contenido"/>
      </div>
    );
  }
}
