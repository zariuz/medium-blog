import React, { useEffect } from 'react';
import { stringify } from 'query-string';

import { Feed } from 'components/Feed';
import { useFetch } from 'hooks/useFetch';
import { Pagination } from 'components/Pagination';
import { getPaginator, limit } from 'utils';
import { Loading } from 'components/Loading';
import { ErrorMessage } from 'components/ErrorMessage';
import { FeedToggler } from 'components/FeedToggler';
import { PopularTags } from 'components/PopularTags';

export const TagFeed = ({ location, match }) => {
  const tagName = match.params.slug;
  console.log('tagName', tagName);
  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset,
    tag: tagName,
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const currentUrl = match.url;
  const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage, tagName]);

  return (
    <div className='home-page'>
      <div className='banner'>
        <h1>Medium Clone</h1>
        <p>A place to share knowledge</p>
      </div>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-9'>
            <FeedToggler tagName={tagName} />
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={currentUrl}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>
          <div className='col-md-3'>
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};
