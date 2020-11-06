import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { ArticleForm } from 'components/ArticleForm';
import { useFetch } from 'hooks/useFetch';
import { CurrentUserContext } from 'contexts/currentUser';

export const CreateArticle = () => {
  const apiUrl = '/articles';
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [currentUserState] = useContext(CurrentUserContext);

  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  const onSubmit = (article) => {
    doFetch({
      method: 'post',
      data: {
        article,
      },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setIsSuccessfullSubmit(true);
  }, [response]);

  if (currentUserState.isLoggedIn === false) {
    return <Redirect to="/" />;
  }

  if (isSuccessfullSubmit || currentUserState.isLoggedIn === false) {
    return <Redirect to={`/articles/${response.article.slug}`} />;
  }

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={(error && error.errors) || {}}
      />
    </div>
  );
};
