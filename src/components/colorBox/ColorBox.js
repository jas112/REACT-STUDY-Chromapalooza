import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './styles/ColorBox.css';
import styles from './styles/ColorBoxStyles';

// const styles = {

//     colorBox: {
//         width: '20%',
//         height: props => props.isFullPalette ? '25%' : '50%',
//         margin: '0 auto',
//         display: 'inline-block',
//         position: 'relative',
//         cursor: 'pointer',
//         marginBottom: '-3.5px',
//         '&:hover button': {
//             opacity: '1',
//             transition: '.5s'
//         }
//     },

//     colorBoxColorName: {
//         color: props => chroma(props.backgroundColor).luminance() <= .55 ? '#ffffff' : '#000000',
//     },

//     seeMoreBtn: {
//         color: props => chroma(props.backgroundColor).luminance() >= .6 ? '#000000' : '#ffffff',
//         width: '60px',
//         height: '30px',
//         background: '#ffffff50',
//         position: 'absolute',
//         right: '0px',
//         bottom: '0px',
//         border: 'none',
//         fontWeight: '500',
//         textAlign: 'center',
//         lineHeight: '30px',
//         textTransform: 'uppercase',
//     },

//     copyElementBtn: {
//         color: props => chroma(props.backgroundColor).luminance() >= .6 ? '#000000' : '#ffffff',
//         width: '100px',
//         height: '30px',
//         display: 'inline-block',
//         background: '#ffffff50',
//         fontSize: '1rem',
//         textAlign: 'center',
//         textTransform: 'uppercase',
//         lineHeight: '30px',
//         outline: 'none',
//         border: 'none',
//         position: 'absolute',
//         top:'50%',
//         left: '50%',
//         marginTop: '-15px',
//         marginLeft: '-50px',
//         opacity: '0',
//     },

//     boxContent: {
//         width: '100%',
//         position: 'absolute',
//         left: '0px',
//         bottom: '0px',
//         padding: '10px',
//         fontSize: '10px',
//         color:'#000000',
//         letterSpacing: '1px',
//         textTransform: 'uppercase',   
//     },

//     copyIndicatorOverlay: {
//         width: '100%',
//         height: '100%',
//         transform: 'scale(.1)',
//         opacity: '0',
//         zIndex: '0',
//         transition: 'transform .6s ease-in-out',
//     },

//     showCopyIndicatorOverlay: {
//         position: 'absolute',
//         transform: 'scale(50)',
//         opacity: '1',
//         zIndex: '100',
//         transition: 'transform .6s ease-in-out',
//     },

//     copyIndicatorMsg: {
//         position: 'fixed',
//         left:'0',
//         right:'0',
//         top:'0',
//         bottom:'0',
//         display: 'flex',
//         flexFlow: 'column nowrap',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color:'#ffffff',
//         fontSize: '4rem',
//         transform: 'scale(.1)',
//         opacity: '0',
//         '& h1': {
//             width:'100%',
//             marginBottom: '0',
//             fontWeight: '400',
//             textAlign: 'center',
//             textShadow: '0px 0px 5px #00000090',
//             textTransform: 'uppercase',
//             backgroundImage: 'linear-gradient(to right,#ffffff00,#ffffff00,#ffffff30,#ffffff50,#ffffff30,#ffffff00,#ffffff00)',
//             padding: '1rem',
//         },
//     },

//     showCopyIndicatorMsg: {
//         transform: 'scale(1)',
//         opacity: '1',
//         zIndex: '100',
//         transition: 'all .4s ease-in-out',
//         transitionDelay: '.3s',
//     },

//     copyIndicatorMsgColor: {
//         color: props => chroma(props.backgroundColor).luminance() >= .6 ? '#000000' : '#ffffff',
//         fontWeight: '300',
//         fontSize: '2rem'
//     },
// }

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {isCopying: false};
        this.triggerCopyIndicator = this.triggerCopyIndicator.bind(this);
    }

    triggerCopyIndicator(){
        // console.log(``);
        this.setState({isCopying: true},() => {
            // console.log(`isCopy: ${this.state.isCopying}`);
            setTimeout(() => {
                this.setState({isCopying: false});
            }, 1500);
        });
    }

    // generateShowMoreLink(linkStyle){
    //     return (
    //         <Link to={this.props.colorUrl} onClick={e => e.stopPropagation()}>
    //             <span className={`see-more ${linkStyle}`}>More</span>
    //         </Link>
    //     );
    // }

    generateShowMoreLink(){
        return (
            <Link to={this.props.colorUrl} onClick={e => e.stopPropagation()}>
                <span className={this.props.classes.seeMoreBtn}>More</span>
            </Link>
        );
    }

  render() {
    
    const {backgroundColor, name , showMore, classes} = this.props;
    const { isCopying } = this.state;
    // let bgLuminance = chroma(backgroundColor).luminance();
    // let isDarkBGColor = bgLuminance <= .55;
    // let isLightBGColor = bgLuminance >= .6;
    // console.log(`backgroundColor: ${backgroundColor} | bgLuminance: ${bgLuminance} | isDarkBGColor: ${isDarkBGColor} | isLightBGColor: ${isLightBGColor}`);

    // var styleValueColorBoxName;
    // var styleValueMoreBtn;

    // if(isDarkBGColor){
    //     styleValueColorBoxName = 'isDarkBG';
    // }else{
    //     styleValueColorBoxName = null;
    // }

    // if(isLightBGColor){
    //     styleValueMoreBtn = 'isLightBG';
    // }else{
    //     styleValueMoreBtn = null;
    // }

    // let showMoreLink = this.generateShowMoreLink(styleValueMoreBtn);

    let showMoreLink = this.generateShowMoreLink();

    return (
        <CopyToClipboard text={backgroundColor} onCopy={this.triggerCopyIndicator}>
            <div className={classes.colorBox} style={{backgroundColor: backgroundColor}}>
                <div  className={`${classes.copyIndicatorOverlay} ${isCopying ? classes.showCopyIndicatorOverlay : null}`} style={{backgroundColor: backgroundColor}} />
                <div className={`${classes.copyIndicatorMsg} ${isCopying ? classes.showCopyIndicatorMsg : null}`}>
                    <h1>copied!</h1>
                    {/* <p className={`${styleValueColorBoxName}`}>{this.props.backgroundColor}</p> */}
                    <p className={classes.copyIndicatorMsgColor}>{this.props.backgroundColor}</p>
                </div>
                <div>
                    {/* <div className={`box-content ${styleValueColorBoxName}`}>
                        <span>{name}</span>
                    </div> */}
                    {/* <button className='copy-element-btn'>Copy</button> */}

                    <div className={classes.boxContent}>
                        <span className={classes.colorBoxColorName}>{name}</span>
                    </div>
                    <button className={classes.copyElementBtn}>Copy</button>

                </div>
                {showMore ? showMoreLink : null}
            </div>
        </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox);