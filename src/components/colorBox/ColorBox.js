import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {isCopying: false};
        this.triggerCopyIndicator = this.triggerCopyIndicator.bind(this);
    }

    triggerCopyIndicator(){
        console.log(``);
        this.setState({isCopying: true},() => {
            console.log(`isCopy: ${this.state.isCopying}`);
            setTimeout(() => {
                this.setState({isCopying: false},() => console.log(`isCopy: ${this.state.isCopying}`));
            }, 1500);
        });
    }

    generateShowMoreLink(){
        return (
            <Link to={this.props.colorUrl} onClick={e => e.stopPropagation()}>
                <span className='see-more'>More</span>
            </Link>
        );
    }

  render() {
    
    const {backgroundColor, name , showMore} = this.props;

    let showMoreLink = this.generateShowMoreLink();

    return (
        <CopyToClipboard text={backgroundColor} onCopy={this.triggerCopyIndicator}>
            <div className='ColorBox' style={{backgroundColor: backgroundColor}}>
                <div  className={`copy-indicator-overlay ${this.state.isCopying ? 'show' : null}`} style={{backgroundColor: backgroundColor}} />
                <div className={`copy-indicator-msg ${this.state.isCopying ? 'show' : null}`}>
                    <h1 className=''>copied!</h1>
                    <p>{this.props.backgroundColor}</p>
                </div>
                <div className='copy-element-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-element-btn'>Copy</button>
                </div>
                {showMore ? showMoreLink : null}
            </div>
        </CopyToClipboard>
    )
  }
}

export default ColorBox;