import React from 'react';
import { Container, Stack } from '@mui/material';
import ArticleAccordion from './ArticleAccordion';

interface Article {
    title: string;
    content: string;
}

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <Container maxWidth="md" sx={{ margin: 'auto' }}>
            <Stack spacing={2} sx={{ width: '100%' }}>
                {articles.map((article, index) => (
                    <ArticleAccordion
                        key={index}
                        title={article.title}
                        content={article.content}
                        isOdd={index % 2 !== 0}
                    />
                ))}
            </Stack>
        </Container>
    );
};

export default ArticleList;