
class ToysGridCoponent {
  constructor() {
    this.state = {
      toys: []
    };
    this.init();
  }

  fetchToys = () => {
    API.getToys(
      (toys) => {
        this.state.toys = toys;
        this.render();
      },
      (err) => console.log(err)
    );
  }

  init = () => {
    this.fetchToys();
  }

  render = () => {

  }
}
