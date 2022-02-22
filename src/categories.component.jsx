const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, key) => {
        return (
          <button
            type="button"
            key={key}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
