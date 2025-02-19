import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => {
          const nextPageUrl = !isAdmin
            ? keyword
              ? `/search/${keyword}/page/${x + 1}`
              : `/page/${x + 1}`
            : `/admin/productlist/${x + 1}`;

          const pageUrl = nextPageUrl ? nextPageUrl : undefined;

          return (
            <LinkContainer key={x + 1} to={pageUrl}>
              <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
            </LinkContainer>
          );
        })}
      </Pagination>
    )
  );
};
Paginate.propTypes = {
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
  keyword: PropTypes.string,
};

export default Paginate;

