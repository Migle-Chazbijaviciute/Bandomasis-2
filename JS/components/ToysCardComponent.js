
class ToysCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  createCard = () => {
    let { id, title, price, ageRestriction, discount, imgSrc } = this.props.data;
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="border shadow">
    <button class="btn btn-sm btn-danger delete float-end">✕</button>
    <div class="h-100">
    <div class="card-body">
      <h3 class="card-title">${title}</h3>
    </div>
    <img src="${imgSrc}" class="card-img-top">
    <ul class="list-group">
      <li class="list-group-item text-muted">Price: ${price.amount} ${price.currency}</li>
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

