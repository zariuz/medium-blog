import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

import { useFetch } from 'hooks/useFetch';
import { CurrentUserContext } from 'contexts/currentUser';

export const AddToFavorites = ({ isFavorited, favoritesCount, articleSlug }) => {
  const apiUrl = `/articles/${articleSlug}/favorite`;
  const [{ response }, doFetch] = useFetch(apiUrl);
  const isFavoritedWithResponse = response ? response.article.favorited : isFavorited;
  const favoritesCountWithResponse = response
    ? response.article.favoritesCount
    : favoritesCount;

  const [currentUserState] = useContext(CurrentUserContext);
  const [noLoged, setNoLoged] = useState(false);

  const buttonClasses = classNames({
    btn: true,
    'btn-sm': true,
    'btn-primary': isFavoritedWithResponse,
    'btn-outline-primary': !isFavoritedWithResponse,
  });

  const handleLike = (event) => {
    event.preventDefault();

    if (currentUserState.isLoggedIn === false) {
      setNoLoged(true);
    }

    doFetch({
      method: isFavoritedWithResponse ? 'delete' : 'post',
    });
  };

  if (noLoged) {
    return <Redirect to="/login" />;
  }

  return (
    <button className={buttonClasses} onClick={handleLike}>
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesCountWithResponse}</span>
    </button>
  );
};
