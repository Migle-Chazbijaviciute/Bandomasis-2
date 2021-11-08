
class ToysCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  createCard = () => {
    let { id, title, price, ageRestriction, discount, imgSrc } = this.props.data;
    const element = document.createElement('div');
    element.innerHTML = `
    <div class"col-sm-4 col-lg-6">
    <div class="card mb-5" style="width: 350px;">
    <button class="btn btn-sm btn-danger delete">✕</button>
    <img src="${imgSrc}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-muted">Price: ${price.amount} ${price.currency}</li>
      <li class="list-group-item"><span id='restrict'></span></li>
      <li class="list-group-item">Discount: ${discount.amount} ${discount.type}</li>
    </ul>
  </div>
  </div>
    `
    const deleteBtn = element.querySelector('.delete');
    // debugger;
    deleteBtn.addEventListener('click', () => this.props.onDelete(id));
    return element;
  }

  init = () => {
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    this.htmlElement.appendChild(this.createCard());
  };
}

