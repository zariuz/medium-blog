import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { ArticleForm } from 'components/ArticleForm';
import { useFetch } from 'hooks/useFetch';
import { CurrentUserContext } from 'contexts/currentUser';

export const EditArticle = ({ match }) => {
  const slug = match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const [currentUserState] = useContext(CurrentUserContext);

  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiUrl);
  const [
    { response: updateArticleResponse, error: updateArticleError },
    doUpdateArticle,
  ] = useFetch(apiUrl);

  const onSubmit = (article) => {
    doUpdateArticle({
      method: 'put',
      data: {
        article,
      },
    });
  };

  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);

  useEffect(() => {
    if (!fetchArticleResponse) {
      return;
    }

    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList.join(' '),
    });
  }, [fetchArticleResponse]);

  useEffect(() => {
    if (!updateArticleResponse) {
      return;
    }
    setIsSuccessfullSubmit(true);
  }, [updateArticleResponse]);

  if (currentUserState.isLoggedIn === false) {
    return <Redirect to="/" />;
  }

  if (isSuccessfullSubmit) {
    return <Redirect to={`/articles/${slug}`} />;
  }

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={(updateArticleError && updateArticleError.errors) || {}}
      />
    </div>
  );
};
