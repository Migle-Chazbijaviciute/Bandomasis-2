
class ToysGridComponent {
  constructor() {
    this.state = {
      toys: [],
      loading: false
    };
    this.init();
  }

  fetchToys = () => {
    this.state.loading = true;
    API.getToys(
      (toys) => {
        this.state.toys = toys;
        this.state.loading = false;
        this.render();
      },
      (err) => console.log(err)
    );
  }

  init = () => {
    this.fetchToys();
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif"></div>';
    } else {
      this.htmlElement.innerHTML = '';
      this.state.toys.forEach(toys => {
        const newToy = new ToysCardComponent({
          data: toys,
        });
        this.htmlElement.appendChild(newToy.htmlElement);
      });
    }
  }
}
