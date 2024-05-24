import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataNews from '~/dataNews';
import PostBlog from '~/componentes/PostBlog/PostBlog';
import PostNew from '~/componentes/PostBlog/PostNew';
import dataWeddingPhoto from '~/dataWeddingPhoto';

function NewPost() {
    const { newPost } = useParams();
    const [dataPost, setDataPost] = useState({});

    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        dataNews.map((newItem) => {
            if (newItem.title === newPost) {
                setDataPost(newItem);
            }
        });
        dataWeddingPhoto.map((newItem) => {
            if (newItem.title === newPost) {
                setDataPost(newItem);
            }
        });
    }, [newPost]);
    return <PostBlog data={dataPost} children={<PostNew data={dataPost} />} />;
}

export default NewPost;
