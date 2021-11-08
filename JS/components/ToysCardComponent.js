
class ToysCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  createCard = () => {
    let { id, title, price, ageRestrictions, discount, imgSrc } = this.props.data;
    const { currency, amount } = price;
    if (discount.type === "percentage") {
      discount = `${discount.amount}%`
    } else if (discount.type === "amount") {
      discount = `Minus ${discount.amount}${currency} from the cart total!`
    } else {
      discount = `Minus ${discount.amount}${currency} from every unit!`
    };
    // console.log(ageRestrictions);
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="border shadow">
    <button class="btn btn-sm btn-danger delete float-end">✕</button>
    <div class="h-100">
    <div class="card-body">
      <h3 class="card-title">${title}</h3>
    </div>
    <img src="${imgSrc}" class="card-img-top pb-3">
    <ul class="list-group">
      <li class="list-group-item"><b>Price:</b> ${amount} ${currency}</li>
      <li class="list-group-item"><b>Discount:</b> ${discount}</li>
    </ul>
</div>
  </div>`

    const newItem = document.createElement('li');
    newItem.className = "list-group-item";
    if (ageRestrictions != null) {
      newItem.innerHTML = `
    <b>Age restriction:</b> ${ageRestrictions.from}+
    `
    } else {
      newItem.className = "list-group-item text-muted";
      newItem.innerHTML = `No age restriction.`
    }

    const ulElement = element.querySelector('.list-group');
    ulElement.appendChild(newItem);

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

