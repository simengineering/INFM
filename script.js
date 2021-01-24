class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'Nice View...',
        link: 'index2.html',
        icon: 'fa-pencil-square-o' },
      {
        text: 'Github',
        link: 'https://github.com/simengineering',
        icon: 'fa-github' },
      {
        text: 'Twitter',
        link: 'https://twitter.com/MattIndigo1',
        icon: 'fa-twitter' }] };


  }
  render() {
    let links = this.state.links.map((link, i) => /*#__PURE__*/React.createElement("li", { ref: i + 1 }, /*#__PURE__*/React.createElement("i", { "aria-hidden": "true", className: `fa ${link.icon}` }), /*#__PURE__*/React.createElement("a", { href: link.link, target: "_blank" }, link.text)));

    return /*#__PURE__*/(
      React.createElement("div", { className: this.props.menuStatus, id: "menu" }, /*#__PURE__*/
      React.createElement("ul", null,
      links)));



  }}


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false };

    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }
  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
        isOpen: false });

    };
  }
  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen });

  }
  render() {
    let menuStatus = this.state.isOpen ? 'isopen' : '';

    return /*#__PURE__*/(
      React.createElement("div", { ref: "root" }, /*#__PURE__*/
      React.createElement("div", { className: "menubar" }, /*#__PURE__*/
      React.createElement("div", { className: "hambclicker", onClick: this._menuToggle }), /*#__PURE__*/
      React.createElement("div", { id: "hambmenu", className: menuStatus }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/
      React.createElement("div", { className: "title" }, /*#__PURE__*/
      React.createElement("span", null, this.props.title))), /*#__PURE__*/


      React.createElement(MenuLinks, { menuStatus: menuStatus })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Menu, { title: "" }), document.getElementById('app'));
