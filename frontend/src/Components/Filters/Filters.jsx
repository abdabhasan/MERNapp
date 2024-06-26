import styled from "styled-components";
import { useFilterContext } from "../../context/filter_context";
import { getUniqueValues } from "../../utils/helpers";

const Filters = () => {
  const {
    filters: { text, category, distance },
    clearFilters,
    updateFilters,
    all_shops,
  } = useFilterContext();

  const categories = getUniqueValues(all_shops, "businessType");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* search input end  */}

          {/* categories */}

          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    onClick={updateFilters}
                    className={`${
                      category.toLowerCase() === item.toLowerCase()
                        ? "active"
                        : null
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* categories end */}

          {/* distance */}
          <h5>distance</h5>
          <p className="distance">{distance}</p>
          <input
            type="range"
            name="distance"
            min="0"
            max="10"
            onChange={updateFilters}
          />
          {/* distance end */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-9);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .active {
    opacity: 1;
    color: var(--clr-black);
    border-color: var(--clr-grey-5);
  }

  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    transition: var(--transition);
    &:hover {
      background: var(--clr-red-light);
    }
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
