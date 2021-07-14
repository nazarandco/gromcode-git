import React from 'react';

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    return (
      <div className='dimensions'>{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}

export default Dimensions;
