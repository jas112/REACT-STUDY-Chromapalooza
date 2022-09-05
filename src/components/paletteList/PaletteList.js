import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MiniPalette from '../miniPalette/MiniPalette';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './styles/PaletteList.css';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            targetPaletteId: '',
        };
        this.handleDeleteDialogOpen = this.handleDeleteDialogOpen.bind(this);
        this.handleDeleteDialogClose = this.handleDeleteDialogClose.bind(this);
        this.confirmPaletteDelete = this.confirmPaletteDelete.bind(this);
    }

    handleDeleteDialogOpen(id) {
        this.setState({ open: true, targetPaletteId: id });
    };
    
    handleDeleteDialogClose() {
        this.setState({ open: false, targetPaletteId: '' });
    };

    confirmPaletteDelete(){
        this.props.deletePalette(this.state.targetPaletteId);
        this.handleDeleteDialogClose();
    }

    generatePalettes(){
        let rootPalettes = this.props.palettes; 

        let currentPalettes = rootPalettes.map(palette => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette 
                    {...palette} 
                    key={palette.id} 
                    handleClick={() => this.navigateToPaletteById(palette.id)}
                    id={palette.id}
                    // deletePalette={this.props.deletePalette} 
                    openDeleteDialog={this.handleDeleteDialogOpen}
                    closeDeleteDialog={this.handleDeleteDialogClose}
                />
            </CSSTransition>
            // <NavLink style={{color: 'goldenrod'}} to={`/palette/${palette.id}`}>{palette.paletteName}</NavLink>
        ));

        return currentPalettes;
    }

    navigateToPaletteById(id){
        this.props.history.push(`/palette/${id}`);
    }
  render() {
    const {open, targetPaletteId} = this.state;
    const {classes, deletePalette} = this.props;
    const palettes = this.generatePalettes();
    // console.log(`palettes: ${this.props.palettes}`);
    return (
        <div className={classes.paletteList}>
            <div className={classes.paletteListConsole}>
                <div className={classes.paletteListHeader}>
                    <div className={classes.paletteListMainTitleBox}>
                        <div className='PaletteList-mainTitle'>
                            <NavLink to='/'>chromapalooza</NavLink>
                        </div>
                    </div>
                    <div className={classes.paletteListHeaderConsoleBox}>
                        <div className={classes.paletteListHeaderOperation}>
                            <NavLink className={classes.paletteListHeaderOperationLink} to='/palette/new'>Create Palette</NavLink>
                        </div>
                    </div>
                </div>
                    <TransitionGroup className={classes.paletteListDisplay}>

                        {palettes}

                    </TransitionGroup>
            </div>
            <Dialog 
                open={open} 
                aria-labelledby='delete-palette-dialog'
                onClose={this.handleDeleteDialogClose}
            >
                <DialogTitle id='delete-palette-dialogs'>Confirm Palette Delete</DialogTitle>
                <DialogContentText style={{textAlign: 'center'}}>
                    {`Palette ID => ${targetPaletteId}`}
                </DialogContentText>
                <List>
                    <ListItem button onClick={this.confirmPaletteDelete}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: blue[100], color: blue[800]}}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText style={{color: blue[800]}}>
                            Delete
                        </ListItemText>
                    </ListItem>
                    <ListItem button onClick={this.handleDeleteDialogClose}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: red[100], color: red[800]}}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText style={{color: red[800]}}>
                            Cancel
                        </ListItemText>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
  }
}

export default withStyles(styles)(PaletteList);