import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataNews from '~/dataNews';
import PostBlog from '~/componentes/PostBlog/PostBlog';
import PostNew from '~/componentes/PostBlog/PostNew';

function NewPost() {
    const { newPost } = useParams();
    const [dataPost, setDataPost] = useState({});
    useEffect(() => {
        dataNews.map((newItem) => {
            if (newItem.title === newPost) {
                setDataPost(newItem);
            }
        });
    }, [newPost]);
    return <PostBlog data={dataPost} children={<PostNew data={dataPost} />} />;
}

export default NewPost;
