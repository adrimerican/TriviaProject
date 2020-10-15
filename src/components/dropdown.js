import React, { Component } from 'react';




class DropdownMenu extends Component {

  constructor() {
    super();

    this.state = {
      showMenu: false,
      
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  render() {

    return (
        <div>
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Books </button>
                <button href=""> General Knowledge </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default DropdownMenu;