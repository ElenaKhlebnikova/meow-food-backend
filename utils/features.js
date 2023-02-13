class Features {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    if (this.queryString.strCategory === "All") {
      this.query = this.query.find();
      return this;
    } else {
      const filter = this.queryString.strCategory;
      this.query = this.query.find({ strCategory: filter });
      return this;
    }
  }
  sort() {
    if (!this.queryString.sort) {
      this.query = this.query.sort("strMeals");
      return this;
    } else {
      const sortDirection = this.queryString.sort.split(",")[1];
      this.query = this.query.sort({
        price: sortDirection,
      });
      return this;
    }
  }
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = Features;
